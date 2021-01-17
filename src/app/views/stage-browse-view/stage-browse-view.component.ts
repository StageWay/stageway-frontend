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
  
  constructor( private service:StageService, private dialog: MatDialog, private httpClient: HttpClient) {}

  StageList: StageDetailModel[];
  dataIsLoading = true;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.getAllStages().subscribe(data=>{
        this.StageList=data;
        this.dataIsLoading = false;
    });
  }   

  openStageDetailDialog(item: StageDetailModel) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = { stageItem: item };

    this.dialog.open(StageDetailDialogComponent, dialogConfig);
  }
}
