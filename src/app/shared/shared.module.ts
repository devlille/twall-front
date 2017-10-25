import { TweetsService } from './service/tweets.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TweetsService],
  declarations: []
})
export class SharedModule { }
