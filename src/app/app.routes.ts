import { Routes } from '@angular/router';
import {Page1Component} from "./components/page1/page1.component";
import {Page2Component} from "./components/page2/page2.component";

export const routes: Routes = [
  {
    path: 'page1',
    title: 'Page 1',
    component: Page1Component
  },
  {
    path: 'page2',
    title: 'Page 2',
    component: Page2Component,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page1',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page1'
  }
];
