import { Routes } from '@angular/router';

import { TweetsGridListComponent } from './page/tweets/tweets-grid-list/tweets-grid-list.component';

export const AppRoutes: Routes = [
    {
        path: 'tweets',
        component: TweetsGridListComponent
    },
    {
        path: '',
        redirectTo: '/tweets',
        pathMatch: 'full'
    }
];
