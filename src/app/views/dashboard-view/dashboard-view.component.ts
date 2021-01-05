import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StageCreateDialogComponent } from '../stage-browse-view/stage-create-dialog/stage-create-dialog.component';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

  openStageCreateDialog() {

    const dialogConfig = new MatDialogConfig();
 
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(StageCreateDialogComponent, dialogConfig);

  }

}
