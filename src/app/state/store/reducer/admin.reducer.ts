import { Order } from "src/app/models/Order";
import { AdminAction } from "../action/hostel.action";
import { AdminActionTypes } from "../enum/enum";

export interface AdminState{
  list:Order[],
  loading:boolean,
  error:Error
}

export const initialState = {
  list:[],
  loading:false,
  error:Error()
}

export function orderReducer(state:AdminState = initialState, action:AdminAction){
  switch(action.type){
    case(AdminActionTypes.LOAD_ORDERS):
    return{
      ...state,
      loading:true
    }

    case(AdminActionTypes.LOAD_ORDERS_SUCCESS):
    return{
      ...state,
      list: action.payload,
      loading:false
    }

    case(AdminActionTypes.LOAD_ORDERS_FAILURE):
      return{
        ...state,
        loading:false,
        error:action.payload
    }

    default:
      return state;
  }
}
