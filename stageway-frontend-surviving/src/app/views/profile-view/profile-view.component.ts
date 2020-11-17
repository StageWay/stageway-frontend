import { Component, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
