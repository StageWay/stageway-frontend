import { Component, OnInit } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-auth-button',
  styleUrls: ['./auth-button.component.css'],
  template: '<button mat-button fxHide.xs (click)="auth.loginWithRedirect()">Sign in</button>'
})
export class AuthButtonComponent implements OnInit {

   // Inject the authentication service into your component through the constructor
   constructor(public auth: AuthService) {}

  ngOnInit() {
  }

}
