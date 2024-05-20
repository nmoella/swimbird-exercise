import { Injectable } from '@angular/core';
import {Reason} from "./reason";

@Injectable({
  providedIn: 'root'
})
export class ReasonService {
  public reasons: Reason[] = [
    {
      title: 'Banks & asset managers',
      description: 'We seamlessly integrate and aggregate transaction data from multiple sources with flexibility and fast development.'
    },
    {
      title: 'Family offices & investment companies',
      description: 'Get access to our modern and user-friendly user interface to manage your total portfolio including listed and unlisted investments.'
    },
    {
      title: 'Private equity & venture capital firms',
      description: 'Get transparency and insights in your multi asset portfolio with details and analytics relevant to both GPs and LPs.'
    },
  ]
}
