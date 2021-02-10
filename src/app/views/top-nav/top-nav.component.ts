import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService, @Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void  {
    this.auth.error$.subscribe(data => {
      console.log(data);
    })
    this.auth.isAuthenticated$.subscribe(data => {
      console.log(data);
    })
    this.auth.user$.subscribe(data => {
      console.log(data);
    })
  }


}
