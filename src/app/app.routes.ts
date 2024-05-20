import {Route} from '@angular/router';
import {ReasonComponent} from "./routes/reason/reason.component";
import {TableComponent} from "./routes/table/table.component";

export declare type NavRoutes = NavRoute[];
export interface NavRoute extends Route {
  visible: boolean;
}

export const routes: NavRoutes = [
  {
    path: 'reasons',
    title: 'Reasons',
    component: ReasonComponent,
    visible: true
  },
  {
    path: 'table',
    title: 'Table',
    component: TableComponent,
    visible: true
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reasons',
    visible: false
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'reasons',
    visible: false
  }
];
