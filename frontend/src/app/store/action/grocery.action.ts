import { createAction  , props} from "@ngrx/store";
import { Grocery } from '../../models/common.model';







export const getAllGrocery = createAction('[Grocery]  getall');
export const updateGrocery = createAction('[Grocery]  update' , props<{payload: Grocery[]}>());