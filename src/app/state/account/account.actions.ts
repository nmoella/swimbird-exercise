import {createAction, props} from "@ngrx/store";
import {Account} from "../../services/account";

export const loadAccounts = createAction(
  '[Account] Load'
);

export const loadAccountsSuccess= createAction(
  '[Account] Load Success',
  props<{accounts: Account[]}>()
);

export const loadAccountsFail= createAction(
  '[Account] Load Fail',
  props<{error: any}>()
);
