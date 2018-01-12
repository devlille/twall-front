import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TimePipe} from './time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TimePipe],
  declarations: [TimePipe]
})
export class PipeModule {
}
