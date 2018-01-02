import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { PageModule } from './page/page.module';

import { AppRoutes } from './app.route';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled : environment.production}),
    RouterModule.forRoot(AppRoutes),
    LayoutModule,
    PageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
