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

    case(AdminActionTypes.DELETE_ORDERS):
    return{
      ...state,
      loading:true
    }

    case(AdminActionTypes.DELETE_ORDERS_SUCCESS):
    return{
      ...state,
      list:state.list.filter(item => item.orderID !== action.payload.orderID),
      loading:false
    }

    case(AdminActionTypes.DELETE_ORDERS_FAILURE):
    return{
      ...state,
      loading:false,
      error:Error
    }

    case(AdminActionTypes.ADD_COMPLETED_ORDERS):
    return{
      ...state,
      loading:true
    }

    case(AdminActionTypes.ADD_COMPLETED_ORDERS_SUCCESS):
    return{
      ...state,
      loading:false,
      list:action.payload
    }

    case(AdminActionTypes.ADD_COMPLETED_ORDERS_FAILURE):
    return{
      ...state,
      loading:false,
      error:Error
    }

    case(AdminActionTypes.LOAD_COMPLETED_ORDERS):
    return{
      ...state,
      loading:true
    }

    case(AdminActionTypes.LOAD_COMPLETED_ORDERS_SUCCESS):
    return{
      ...state,
      list:action.payload,
      loading:false
    }

    case(AdminActionTypes.LOAD_COMPLETED_ORDERS_FAILURE):
    return{
      ...state,
      loading:false,
      error:Error
    }

    default:
      return state;
  }
}
