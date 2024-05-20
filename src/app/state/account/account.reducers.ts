import {createReducer, on} from "@ngrx/store";
import {loadAccountsSuccess} from "./account.actions";
import {AccountState} from "./account.state";

const initialState: AccountState = {
  accounts: undefined,
}

export const accountReducer = createReducer(
  initialState,
  on(loadAccountsSuccess, (state, { accounts }) => {
    return { ...state, accounts };
  })
);
