import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {AccountEffects} from "./state/account/account.effects";
import {accountReducer} from "./state/account/account.reducers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
        provide: 'AccountBackendUrl',
        useValue: 'https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK'
    },
    provideStore({
      account: accountReducer
    }),
    provideEffects([AccountEffects]),
  ]
};
