import { Injectable } from '@angular/core';
import {Reason} from "./reason";

@Injectable({
  providedIn: 'root'
})
export class ReasonService {
  public reasons: Reason[] = [
    {
      title: 'Reason 1',
      description: 'Description 1'
    },
    {
      title: 'Reason 2',
      description: 'Description 2'
    },
    {
      title: 'Reason 3',
      description: 'Description 3'
    }
  ]

  constructor() { }
}
