import { StageCreateDialogComponent } from './stage-create-dialog/stage-create-dialog.component';
import { StageDeleteDialogComponent } from './stage-delete-dialog/stage-delete-dialog.component';
import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StageDetailDialogComponent } from './stage-detail-dialog/stage-detail-dialog.component';
import { StageService } from './stage.service';
import { StageDetailModel } from "./stage-detail-model";
import { HttpClient } from '@angular/common/http';


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

  ngOnInit() {
    this.loadData();
    this.auth.idTokenClaims$.subscribe(data => {
      this.isAdmin = data["http://stageway.com/roles"][0] == "admin"
      console.log(this.isAdmin)
    })
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
    dialogConfig.width = "70vw";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = { stageItem: item };

    this.dialog.open(StageDetailDialogComponent, dialogConfig);

  }

  async deleteStage(item: StageDetailModel) {
    var dialog = this.dialog.open(StageDeleteDialogComponent)
    dialog.afterClosed().subscribe(data => {
      console.log(data)
      this.toggleDelete()
      if(data == true) {
        this.service.deleteStage(item.stageId).subscribe(() => {
          this.loadData();
        }); 
      }
    })
    
  }

  async editStage(item: StageDetailModel) {
    const dialogConfig = new MatDialogConfig();
 
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data =  item

    var dialog = this.dialog.open(StageCreateDialogComponent, dialogConfig);
    dialog.afterClosed().subscribe(stage => {
      this.toggleEdit();
      this.service.putStage(stage).subscribe();
    })
  }
}
