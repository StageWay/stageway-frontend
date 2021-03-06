import { StageLoadingDialogComponent } from './stage-loading-dialog/stage-loading-dialog.component';
import { StageCreateDialogComponent } from './stage-create-dialog/stage-create-dialog.component';
import { StageDeleteDialogComponent } from './stage-delete-dialog/stage-delete-dialog.component';
import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StageDetailDialogComponent } from './stage-detail-dialog/stage-detail-dialog.component';
import { StageService } from './stage.service';
import { StageDetailModel } from "./stage-detail-model";
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { StageErrorDialogComponent } from './stage-error-dialog/stage-error-dialog.component';


@Component({
  selector: 'app-stage-browse-view',
  templateUrl: './stage-browse-view.component.html',
  styleUrls: ['./stage-browse-view.component.css']
})
export class StageBrowseViewComponent implements OnInit {
  
  constructor( private service:StageService, private auth: AuthService, private dialog: MatDialog, private httpClient: HttpClient) {}

  StageList: StageDetailModel[];
  dataIsLoading = true;
  isAdmin:boolean = false;
  private editing = false;
  private deleting = false;
  private userId:string;
  search:string = '';
  date:string;

  ngOnInit() {
    //this.date = new Date().toISOString().split('T')[0];
    this.date = new Date("1000-01-01").toISOString();
    this.loadData();
    this.openStageOnLoad()
    this.auth.idTokenClaims$.subscribe(data => {
      this.isAdmin = data["http://stageway.com/roles"][0] == "admin"
      this.userId = data["sub"]
    })
  }

  filteredStage() {
    return this.StageList.filter(stage => {
      var today = Date.parse(this.date);
      var d2 = Date.parse(stage.stageDate.toString());
      return `${stage.stageTitle} ${stage.stageSubtitle}`.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) && (today < d2);
    });
  }

  openStageOnLoad() {
    let search_params = new URL(location.href).searchParams;
    var stageId = search_params.get('stage');
    if(stageId != null) {
      this.service.getStage(stageId).subscribe(item => {
        this.openStageDetailDialog(item)
      })
    }
  }

  loadData(){
    this.service.getAllStages().subscribe(data=>{
        this.StageList=data;
        this.dataIsLoading = false;
    });
  }   

  toggleEdit() {
    this.editing = !this.editing;
  }

  toggleDelete() {
    this.deleting = !this.deleting;
  }

  openStageDetailDialog(item: StageDetailModel) {
    if (this.editing || this.deleting) return;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "70vw";
    dialogConfig.data = { stageItem: item };
    var oldHref = location.href;
    if(oldHref.includes("?stage=")) {
      oldHref = oldHref.split("?stage=")[0];
    } else {
      history.pushState({}, null, oldHref + "?stage=" + item.stageId);
    }
    var dialog = this.dialog.open(StageDetailDialogComponent, dialogConfig);
    dialog.afterClosed().subscribe(data => {
      history.pushState({}, null, oldHref);
    })
  }

  async deleteStage(item: StageDetailModel) {
    var dialog = this.dialog.open(StageDeleteDialogComponent)
    dialog.afterClosed().subscribe(data => {
      this.toggleDelete()
      if(data == true) {

        const dialogLoadingConfig = new MatDialogConfig();
        dialogLoadingConfig.disableClose = false;
        dialogLoadingConfig.autoFocus = true;
        var loadingDialog = this.dialog.open(StageLoadingDialogComponent, dialogLoadingConfig);

        this.service.deleteStage(item.stageId).subscribe(() => {
          this.loadData();
          loadingDialog.close();
        }); 
      }
    })
    
  }

  async editStage(item: StageDetailModel) {
    const dialogConfig = new MatDialogConfig();
 
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data =  item

    var dialog = this.dialog.open(StageCreateDialogComponent, dialogConfig);
    dialog.afterClosed().subscribe(stage => {
      this.toggleEdit();
      if(stage != null && stage.stageTitle != null) {

        const dialogLoadingConfig = new MatDialogConfig();

        dialogLoadingConfig.disableClose = false;
        dialogLoadingConfig.autoFocus = true;

        var loadingDialog = this.dialog.open(StageLoadingDialogComponent, dialogLoadingConfig);

        this.service.putStage(stage).subscribe(data => {
          loadingDialog.close();
        }, (error) => {   
          loadingDialog.close();                           
          console.log('error caught in component');
          console.log(error);
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
    
          this.dialog.open(StageErrorDialogComponent, dialogConfig);
        });
      }
    })
  }

  isOwner(stage: StageDetailModel):boolean {
    if(!this.isAdmin) {
      return false;
    }
    if(this.userId == "auth0|5ffdfc6333618a00763c5243")
    {
      return true;
    }
    return stage.stageOwner == this.userId;
  }

  resize(): boolean {
    var width = window.innerWidth - 100;
    var columnNumber = width / 500;
    var columns = ""
    for (let index = 0; index < columnNumber; index++) {
      columns = columns + " 1fr"
    }
    document.getElementById("stage-container").style.setProperty("grid-template-columns", columns)
    return true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  getMultilineString(orig: string): string {
    return orig.replace(/\n/gi, " <br> ");
  }

}
