import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadAccounts, loadAccountsFail, loadAccountsSuccess} from "./account.actions";
import {AccountService} from "../../services/account.service";
import {catchError, map, mergeMap, of} from "rxjs";

@Injectable()
export class AccountEffects {
  constructor(
    private actionObs: Actions,
    private accountService: AccountService
  ) {}

  loadAccountsObs = createEffect(() => this.actionObs.pipe(
    ofType(loadAccounts),
    mergeMap(() => this.accountService.getAccounts().pipe(
      map(accounts => loadAccountsSuccess({ accounts })),
      catchError(error => of(loadAccountsFail({ error })))
    ))
  ));
}
