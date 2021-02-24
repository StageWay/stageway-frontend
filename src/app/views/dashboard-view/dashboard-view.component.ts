import { StageService } from './../stage-browse-view/stage.service';
import { StageDetailModel } from './../stage-browse-view/stage-detail-model';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StageCreateDialogComponent } from '../stage-browse-view/stage-create-dialog/stage-create-dialog.component';
import { AuthService } from '@auth0/auth0-angular';

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
 
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data =  new StageDetailModel()

    var dialog = this.dialog.open(StageCreateDialogComponent, dialogConfig);
    dialog.afterClosed().subscribe(stage => {
      this.createStage(stage)
    })
  }

  createStage(stage: StageDetailModel) {
    this.stageService.postStage(stage).subscribe(data => {
      location.reload();
    })
}

}
