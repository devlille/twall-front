import { Routes } from '@angular/router';

import { TweetsGridListComponent } from './page/tweets/tweets-grid-list/tweets-grid-list.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: TweetsGridListComponent
    }
];
