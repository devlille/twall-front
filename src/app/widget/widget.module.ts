import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material';

import { ClockComponent } from './clock/clock.component';
import { LiveComponent } from './live/live.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ClockComponent, LiveComponent],
  declarations: [ClockComponent, LiveComponent]
})
export class WidgetModule { }
