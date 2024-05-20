import {Account} from "../../services/account";

export interface AccountState {
  accounts: Account[] | undefined;
}
