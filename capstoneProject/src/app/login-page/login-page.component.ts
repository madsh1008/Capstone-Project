import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: []
})
export class LoginPageComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

    
  }




