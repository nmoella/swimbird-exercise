import {createAction, props} from "@ngrx/store";
import {Sort} from "@angular/material/sort";

export const setSort = createAction(
  '[Account] Sort',
  props<{sort: Sort}>()
);
