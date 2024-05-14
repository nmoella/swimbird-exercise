import {Route, Routes} from '@angular/router';
import {Page1Component} from "./components/routes/page1/page1.component";
import {Page2Component} from "./components/routes/page2/page2.component";

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
    path: 'page2',
    title: 'Page2',
    component: Page2Component,
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
