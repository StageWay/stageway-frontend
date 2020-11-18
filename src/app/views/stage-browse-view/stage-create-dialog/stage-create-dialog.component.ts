import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stage } from "../stage";

@Component({
  selector: 'app-stage-create-dialog',
  templateUrl: './stage-create-dialog.component.html',
  styleUrls: ['./stage-create-dialog.component.css']
})
export class StageCreateDialogComponent implements OnInit {
  stageList: Stage[];

  constructor() { }


  ngOnInit() {
  }

}
