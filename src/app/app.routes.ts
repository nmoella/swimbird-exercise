import {Route, Routes} from '@angular/router';
import {Page1Component} from "./routes/page1/page1.component";
import {TableComponent} from "./routes/table/table.component";

export declare type NavRoutes = NavRoute[];
export interface NavRoute extends Route {
  visible: boolean;
}

export const routes: NavRoutes = [
  {
    path: 'page1',
    title: 'Page1',
    component: Page1Component,
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
    redirectTo: 'page1',
    visible: false
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page1',
    visible: false
  }
];
