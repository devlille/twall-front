import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TweetsService } from './service/tweets.service';
import { TimePipe } from './pipe/time.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [TweetsService],
  exports: [TimePipe],
  declarations: [TimePipe]
})
export class SharedModule { }
