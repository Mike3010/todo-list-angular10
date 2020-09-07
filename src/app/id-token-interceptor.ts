import { Injectable, Inject, Optional } from '@angular/core';
import { OAuthService, OAuthStorage, OAuthResourceServerErrorHandler, OAuthModuleConfig } from 'angular-oauth2-oidc';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class IdTokenInterceptor implements HttpInterceptor {

    constructor(
        private authStorage: OAuthStorage,
        private errorHandler: OAuthResourceServerErrorHandler,
        @Optional() private moduleConfig: OAuthModuleConfig
    ) {
    }

    private checkUrl(url: string): boolean {
        let found = this.moduleConfig.resourceServer.allowedUrls.find(u => url.startsWith(u));
        return !!found;
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let url = req.url.toLowerCase();

        if (!this.moduleConfig) return next.handle(req);
        if (!this.moduleConfig.resourceServer) return next.handle(req);
        if (!this.moduleConfig.resourceServer.allowedUrls) return next.handle(req);
        if (!this.checkUrl(url)) return next.handle(req);

        let token = this.authStorage.getItem('id_token');
        let header = 'Bearer ' + token;

        let headers = req.headers
                            .set('Authorization', header);

        req = req.clone({ headers });

        return next.handle(req);
    }
}