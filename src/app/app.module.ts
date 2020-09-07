import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';
import { IdTokenInterceptor } from './id-token-interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    ItemEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        //send id token!?
        sendAccessToken: false,
        allowedUrls: ['https://jsonplaceholder.typicode.com/']
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IdTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
