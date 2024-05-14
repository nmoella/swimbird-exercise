import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routes} from "../../../app.routes";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButton,
    MatNavList,
    MatToolbar,
    NgForOf,
    NgIf,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected readonly routes = routes;
}
