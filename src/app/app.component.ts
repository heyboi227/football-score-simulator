import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { MainserviceService } from './mainservice.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const httpRequest = req.clone({
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
        'Access-Control-Allow-Origin': '*',
      }),
    });

    return next.handle(httpRequest);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'football-app';
  matchHasStarted: boolean;
  constructor(private _mainService: MainserviceService) {
    this._mainService.matchHasStarted$.subscribe((data) => {
      this.matchHasStarted = data;
    });
  }
}
