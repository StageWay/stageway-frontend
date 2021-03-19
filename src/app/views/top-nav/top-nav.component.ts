import { StageService } from './../stage-browse-view/stage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService, @Inject(DOCUMENT) public document: Document, private http: HttpClient, private stages: StageService) { }

  ngOnInit(): void  {
    this.stages.prepareToken();
  }

}