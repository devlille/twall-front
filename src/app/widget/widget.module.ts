import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClockComponent } from './clock/clock.component';
import { LiveComponent } from './live/live.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ClockComponent, LiveComponent],
  declarations: [ClockComponent, LiveComponent]
})
export class WidgetModule { }
