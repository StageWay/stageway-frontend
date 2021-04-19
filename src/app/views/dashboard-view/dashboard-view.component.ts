import { StageService } from './../stage-browse-view/stage.service';
import { StageDetailModel } from './../stage-browse-view/stage-detail-model';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StageCreateDialogComponent } from '../stage-browse-view/stage-create-dialog/stage-create-dialog.component';
import { AuthService } from '@auth0/auth0-angular';
import { StageErrorDialogComponent } from '../stage-browse-view/stage-error-dialog/stage-error-dialog.component';
import { StageLoadingDialogComponent } from '../stage-browse-view/stage-loading-dialog/stage-loading-dialog.component';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  constructor(private stageService: StageService, private dialog: MatDialog, public auth: AuthService) {
  }

  isAdmin:boolean = false;

  ngOnInit() {
    this.auth.idTokenClaims$.subscribe(data => {
      this.isAdmin = data["http://stageway.com/roles"][0] == "admin"
    })
  }

  openStageCreateDialog() {

    const dialogConfig = new MatDialogConfig();
 
    dialogConfig.autoFocus = true;
    dialogConfig.data =  new StageDetailModel()

    var dialog = this.dialog.open(StageCreateDialogComponent, dialogConfig);
    dialog.afterClosed().subscribe(stage => {
      if(stage != null){
        console.log(stage.stageTitle);
        if (this.validateStage(stage) == true){
          this.createStage(stage);
        }
      } else {
        console.log("Fehler");
      }
    })
  }

  createStage(stage: StageDetailModel) {
    const dialogLoadingConfig = new MatDialogConfig();
    dialogLoadingConfig.disableClose = false;
    dialogLoadingConfig.autoFocus = true;
    var loadingDialog = this.dialog.open(StageLoadingDialogComponent, dialogLoadingConfig);
    this.stageService.postStage(stage).subscribe(data => {
      location.reload();
      loadingDialog.close();
    }, (error) => {   
      loadingDialog.close();                           
      console.log('error caught in component');
      console.log(error);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(StageErrorDialogComponent, dialogConfig);
    })
}

validateStage(stage: StageDetailModel): boolean{
  if(stage.stageTitle != undefined ||
    stage.stageSubtitle != undefined ||
    stage.stageSummary != undefined ||
    stage.stageTasks != undefined ||
    stage.stageProfile != undefined ||
    stage.stageBenefits != undefined ||
    stage.stageCompany != undefined ||
    stage.stageLocation != undefined ||
    stage.stageContactEmail != undefined ||
    stage.stageApplyConatct != undefined ) {
      return true;
    } else {
      return false;
    }
}


}
