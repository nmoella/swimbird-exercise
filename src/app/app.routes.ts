import {Route, Routes} from '@angular/router';
import {Page2Component} from "./routes/page2/page2.component";
import {ReasonComponent} from "./routes/reason/reason.component";

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
    component: Page2Component,
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
