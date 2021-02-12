import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stage-delete-dialog',
  templateUrl: './stage-delete-dialog.component.html',
  styleUrls: ['./stage-delete-dialog.component.css']
})
export class StageDeleteDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
