import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    WidgetModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class LayoutModule { }
