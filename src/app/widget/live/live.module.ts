import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';
import {LiveComponent} from './component/live.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [LiveComponent],
  declarations: [LiveComponent]
})
export class LiveModule {
}
