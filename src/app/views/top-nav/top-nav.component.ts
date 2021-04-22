import { IeWarningDialogComponent } from './ie-warning-dialog/ie-warning-dialog.component';
import { StageService } from './../stage-browse-view/stage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  isIE: boolean;

  constructor(public router: Router, public auth: AuthService, @Inject(DOCUMENT) public document: Document, private http: HttpClient, private stages: StageService, private dialog: MatDialog) { }

  ngOnInit(): void  {
    this.stages.prepareToken();
    this.isIE = /*@cc_on!@*/false || !!document["documentMode"];
    if(this.isIE) {
      const dialogLoadingConfig = new MatDialogConfig();

      dialogLoadingConfig.disableClose = false;
      dialogLoadingConfig.autoFocus = true;
      var loadingDialog = this.dialog.open(IeWarningDialogComponent, dialogLoadingConfig);

    }
  }

}