import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  username = '';
  authenticated=false;

  constructor(private oauthService: OAuthService) { 
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndLogin().then(result => {
      if(result) {
        var claims:any = this.oauthService.getIdentityClaims();
        this.authenticated = claims != null;
        this.username = claims.name;
        console.log("CLAIMS:", claims);
      }
    }); 
  }

  logout() {
    this.oauthService.logOut();
    window.location.reload();
  }
}