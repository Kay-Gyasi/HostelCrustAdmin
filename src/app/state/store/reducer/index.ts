import { ActionReducerMap } from "@ngrx/store";
import { AdminState, orderReducer } from "./admin.reducer";
import { customerReducer, CustomerState } from "./customer.reducer";
import { detailsReducer, DetailState } from "./detail.reducer";
import { productReducer, ProductState } from "./product.reducer";


export const rootReducer = {};

export interface AppState{
  order:AdminState,
  product:ProductState,
  customer:CustomerState,
  detail:DetailState
}

export const reducers: ActionReducerMap<any, any> = {
  order: orderReducer,
  product:productReducer,
  customer:customerReducer,
  detail:detailsReducer
}
