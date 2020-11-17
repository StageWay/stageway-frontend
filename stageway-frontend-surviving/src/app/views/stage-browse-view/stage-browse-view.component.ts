import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StageDetailDialogComponent } from './stage-detail-dialog/stage-detail-dialog.component';
import { StageCreateDialogComponent } from "./stage-create-dialog/stage-create-dialog.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stage-browse-view',
  templateUrl: './stage-browse-view.component.html',
  styleUrls: ['./stage-browse-view.component.css']
})
export class StageBrowseViewComponent implements OnInit {
  stageData: any;

  constructor(private dialog: MatDialog, private httpClient: HttpClient) { 
  }


  openStageDetailDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(StageDetailDialogComponent, dialogConfig);

  }

  openStageCreateDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(StageCreateDialogComponent, dialogConfig);

  }

  ngOnInit() {
    this.httpClient.get<any>("assets/stages/stages.json").subscribe((data)=>
    this.stageData = data
  )
  }

}
