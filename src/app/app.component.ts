import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
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
    //this.oauthService.setupAutomaticSilentRefresh();
    //this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin().then(val => {
      var claims:any = this.oauthService.getIdentityClaims();
      this.authenticated = claims != null;
      //this.username = claims.name;
      console.log(claims);
    });    
  }

  logout() {
    this.oauthService.logOut();
  }
}


//http://localhost:4200/
// #state=QXg0TDJDV1VrYXVZU1Rma0xWMktJVXd5TUNRME1IYkR1d0UxWkU5eFZKajJ0
// &access_token=ya29.a0AfH6SMB-GaEf-FoUc8_CG9rRXqur8wAlix2mCbRra1olIBIsu6pyf7xjt-s4mNl-UK_dY4KY-oW82tuTWjIZOLKjLMxxtAell15_0Q014bGCCJ8hYGzRrb509coHGthBzrVu85-a7fXp75d6siVOtPnWPUzgtC5TMulU
// &token_type=Bearer
// &expires_in=3599
// &scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20openid%20https://www.googleapis.com/auth/userinfo.email
// &id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImJjNDk1MzBlMWZmOTA4M2RkNWVlYWEwNmJlMmNlNDM3ZjQ5YzkwNWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NjAzNzc0MTkzMTktN2dhZ2ZqdGU4MzE3NHF2aHA4Ym9lZmI3bDJpMG90djAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NjAzNzc0MTkzMTktN2dhZ2ZqdGU4MzE3NHF2aHA4Ym9lZmI3bDJpMG90djAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTczNDM1MDMxNzE5NzA0OTM3MjQiLCJlbWFpbCI6Im1pa2UzMDEwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiQkZTcjBMZjV0MEQ3MnFjWDk3NkV6QSIsIm5vbmNlIjoiUVhnMFRESkRWMVZyWVhWWlUxUm1hMHhXTWt0SlZYZDVUVU5STUUxSVlrUjFkMFV4V2tVNWVGWkthakowIiwibmFtZSI6Ik1pa2UgTG9nYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1oOEZUVzduc3pnMC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFDTS9BTVp1dWNrMmFXektibGRmbFFtWU8tMy1xZXFCbGx0dy1BL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJNaWtlIiwiZmFtaWx5X25hbWUiOiJMb2dhbiIsImxvY2FsZSI6ImRlIiwiaWF0IjoxNTk5MTY0MzY1LCJleHAiOjE1OTkxNjc5NjUsImp0aSI6ImUxZGM1NGFjM2FkNGY4NTZmZTYwMzVlNTRjYjUwMzg1MWM0MDcwM2YifQ.GuD0wdke533aZRpzXyxY4vA-2uTHXCMMIflN5GJvfP2D-TXxg78nHKwstWna-_C7jcGwbEJjHaE2YVvERxd0SeLMU2Fj66aHT6QElG2RxVzYID4dVZye5bv6uJjV6hbDNCOC5n0TazvokISkKFTuKOzAHKlUcj6EcTbqCA9Ci_ZYTQvXAllazKN2PoWx1ir3OjaW8ecU8a5YOgWZ9ylhj_Dtwrwdc1f7MTA_Tttblatr-M8vpNdHJ0tesFFmJ5eNOthvBj4QuLx7VIp0CoEcK1tvAQYzkgXePGqTL63G92VNYz0VNZkiJcaZ28pTIApqniF8JcVL2qGwW7DnZkuxOg
// &authuser=0
// &prompt=none