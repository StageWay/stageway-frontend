import { Component, OnInit } from '@angular/core';
import { CoachingViewComponent } from '../../coaching-view/coaching-view.component';

@Component({
  selector: 'app-stage-detail-dialog',
  templateUrl: './stage-detail-dialog.component.html',
  styleUrls: ['./stage-detail-dialog.component.css'],
})
export class StageDetailDialogComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit() {
  }

}
