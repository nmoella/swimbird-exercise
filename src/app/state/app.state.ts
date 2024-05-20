import {AccountState} from "./account/account.state";
import {AccountSortState} from "./account-sort/account-sort.state";

export interface AppState {
  account: AccountState,
  accountSort: AccountSortState
}
