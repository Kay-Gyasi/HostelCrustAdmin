import { Customer } from "src/app/models/customer";
import { AdminAction } from "../action/hostel.action";
import { AdminActionTypes } from "../enum/enum";

export interface CustomerState{
  list:Customer[],
  loading:boolean,
  error:Error
}

export const initialState = {
  list:[],
  loading:false,
  error:Error()
}

export function customerReducer(state:CustomerState = initialState, action:AdminAction){
  switch(action.type){
    case(AdminActionTypes.LOAD_CUSTOMERS):
    return{
      ...state,
      loading:true
    }

    case(AdminActionTypes.LOAD_CUSTOMERS_SUCCESS):
    return{
      ...state,
      list: action.payload,
      loading:false
    }

    case(AdminActionTypes.LOAD_CUSTOMERS_FAILURE):
    return{
      ...state,
      loading:false,
      error:action.payload
    }
  }
}
