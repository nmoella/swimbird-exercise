import {AppState} from "../app.state";

export const selectSort = (state: AppState) => {
  return state.accountSort.sort;
}
