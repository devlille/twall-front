import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClockComponent} from './component/clock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ClockComponent],
  declarations: [ClockComponent]
})
export class ClockModule {
}
