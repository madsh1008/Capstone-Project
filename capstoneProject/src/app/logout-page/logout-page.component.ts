import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: []
})
export class LogoutPageComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) {}
  ngOnInit(): void {}

  logout(): void {
    this.auth.logout({logoutParams: {returnTo: this.doc.location.origin}});
  }

}
