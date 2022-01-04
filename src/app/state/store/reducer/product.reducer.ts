import { Product } from "src/app/models/product";
import { AdminAction } from "../action/hostel.action";
import { AdminActionTypes } from "../enum/enum";

export interface ProductState{
  list:Product[],
  loading:boolean,
  error:Error
}

export const initialState = {
  list:[],
  loading:false,
  error:Error()
}

export function productReducer(state:ProductState = initialState, action:AdminAction){
  switch(action.type){
    case(AdminActionTypes.LOAD_PRODUCTS):
    return{
      ...state,
      loading:true
    }

    case(AdminActionTypes.LOAD_PRODUCTS_SUCCESS):
    return{
      ...state,
      list: action.payload,
      loading:false
    }

    case(AdminActionTypes.LOAD_PRODUCTS_FAILURE):
    return{
      ...state,
      loading:false,
      error:action.payload
    }

    default:
      return state;
  }
}
