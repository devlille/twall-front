import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule, MatSnackBarModule} from '@angular/material';
import {PipeModule} from '../../shared/pipe/pipe.module';
import {TwitterModule} from '../../shared/twitter/twitter.module';

import {TweetsListComponent} from './tweets-list/tweets-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    PipeModule,
    TwitterModule
  ],
  declarations: [TweetsListComponent]
})
export class TweetsModule {
}
