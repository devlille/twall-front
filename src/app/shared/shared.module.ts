import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TweetsService } from './service/tweets.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [TweetsService],
  declarations: []
})
export class SharedModule { }
