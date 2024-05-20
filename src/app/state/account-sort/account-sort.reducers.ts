import {createReducer, on} from "@ngrx/store";
import {AccountSortState} from "./account-sort.state";
import {setSort} from "./account-sort.actions";

const initialState: AccountSortState = {
  sort: undefined
};

export const accountSortReducer = createReducer(
  initialState,
  on(setSort, (state, { sort }) => {
    return { ...state, sort };
  })
);
