import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {routes} from "./app.routes";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, MatButtonModule, MatButton, NgIf, MatToolbar, RouterLink, RouterLinkActive, MatNavList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercise';
  protected readonly routes = routes;
}
