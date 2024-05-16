import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ReasonService} from "../../services/reason.service";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [
    NgForOf,
    MatCard,
    MatCardContent,
    MatCardHeader
  ],
  templateUrl: './reason.component.html',
  styleUrl: './reason.component.scss'
})
export class ReasonComponent {
  constructor(protected reasonService: ReasonService) {}
}
