import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetsModule } from './tweets/tweets.module';

@NgModule({
  imports: [
    CommonModule,
    TweetsModule
  ],
  declarations: []
})
export class PageModule { }
