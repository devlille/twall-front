import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';

import {AppRoutes} from './app.route';
import {HeaderModule} from './layout/header/header.module';
import {TweetsModule} from './page/tweets/tweets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    RouterModule.forRoot(AppRoutes),
    HeaderModule,
    TweetsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
