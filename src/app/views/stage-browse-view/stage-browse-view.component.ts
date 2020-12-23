import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StageDetailDialogComponent } from './stage-detail-dialog/stage-detail-dialog.component';
import { StageService } from './stage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stage-browse-view',
  templateUrl: './stage-browse-view.component.html',
  styleUrls: ['./stage-browse-view.component.css']
})
export class StageBrowseViewComponent implements OnInit {
  stageData: any;

  constructor(private dialog: MatDialog, private httpClient: HttpClient, private service:StageService) { 
  }

  StageService 

  StageList:any=[];


  openStageDetailDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;

    this.dialog.open(StageDetailDialogComponent, dialogConfig);
  }
  
  ngOnInit() {
    this.refreshStageList();
  }

  refreshStageList(){
    this.service.getStageList().subscribe(data=>{
        this.StageList=data;
    });
  }

}
