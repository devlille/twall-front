import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatSnackBarModule } from '@angular/material';

import { TweetsListComponent } from './tweets-list/tweets-list.component';
import { TweetsCardComponent } from './tweets-card/tweets-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  declarations: [TweetsListComponent, TweetsCardComponent]
})
export class TweetsModule { }
