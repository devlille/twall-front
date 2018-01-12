import {Routes} from '@angular/router';

import {TweetsListComponent} from './page/tweets/tweets-list/tweets-list.component';

export const AppRoutes: Routes = [
  {
    path: 'tweets',
    component: TweetsListComponent
  },
  {
    path: '',
    redirectTo: '/tweets',
    pathMatch: 'full'
  }
];
