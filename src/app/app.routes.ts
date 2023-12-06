import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'prints',
    loadChildren: () => import('./prints/prints.routes').then((mod) => mod.PRINTS_ROUTES)
  }
];
