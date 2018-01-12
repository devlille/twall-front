import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material';
import {PipeModule} from '../pipe/pipe.module';
import {TweetsCardComponent} from './component/tweets-card/tweets-card.component';
import {TwitterService} from './service/twitter.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    PipeModule
  ],
  providers: [TwitterService],
  exports: [TweetsCardComponent],
  declarations: [TweetsCardComponent]
})
export class TwitterModule {
}
