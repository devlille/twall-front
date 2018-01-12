import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {ClockModule} from '../../widget/clock/clock.module';
import {LiveModule} from '../../widget/live/live.module';
import {HeaderComponent} from './component/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    ClockModule,
    LiveModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class HeaderModule {
}
