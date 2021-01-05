import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css']
})
export class WelcomeViewComponent implements OnInit {

  constructor(public router: Router) { 
  }

  ngOnInit() {
  }

}
