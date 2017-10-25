import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';

import { TweetsGridListComponent } from './tweets-grid-list/tweets-grid-list.component';
import { TweetsTileComponent } from './tweets-tile/tweets-tile.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
  ],
  declarations: [TweetsGridListComponent, TweetsTileComponent]
})
export class TweetsModule { }
