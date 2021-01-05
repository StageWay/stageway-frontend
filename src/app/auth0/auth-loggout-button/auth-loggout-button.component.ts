import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-loggout-button',
  template: '<button (click)="auth.loginWithRedirect()">Ausloggen</button>',
  styleUrls: ['./auth-loggout-button.component.css']
})
export class AuthLoggoutButtonComponent {
  constructor(public auth: AuthService) {}
}
