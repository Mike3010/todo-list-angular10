import { AuthConfig } from 'angular-oauth2-oidc';

  export const authConfig: AuthConfig = {
      // Url of the Identity Provider
  issuer: 'https://accounts.google.com',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin+'/list',

  //either comment both in or out!
  responseType: 'code',
  dummyClientSecret: 'BQvZaj4P0NP3iX-2RD83t8_U',
  
  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '960377419319-7gagfjte83174qvhp8boefb7l2i0otv0.apps.googleusercontent.com',

  strictDiscoveryDocumentValidation: false,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',

  showDebugInformation: true,
};