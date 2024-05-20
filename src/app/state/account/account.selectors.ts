import {AppState} from "../app.state";

export const selectAccounts = (state: AppState) => state.account.accounts;
