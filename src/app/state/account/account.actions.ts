import {createAction, props} from "@ngrx/store";
import {Account} from "../../services/account";

export const loadAccounts = createAction(
  'Load Accounts'
);

export const loadAccountsSuccess= createAction(
  'Load Accounts Success',
  props<{accounts: Account[]}>()
);

export const loadAccountsFail= createAction(
  'Load Accounts Fail',
  props<{error: any}>()
);
