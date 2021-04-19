import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage-error-dialog',
  templateUrl: './stage-error-dialog.component.html',
  styleUrls: ['./stage-error-dialog.component.css']
})
export class StageErrorDialogComponent implements OnInit {

  constructor() { }

  info = "Something went worng! Try again."

  ngOnInit(): void {
  }

}
