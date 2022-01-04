import { Detail } from "src/app/models/orderDetail";
import { AdminAction } from "../action/hostel.action";
import { AdminActionTypes } from "../enum/enum";

export interface DetailState{
  list:Detail[],
  loading:boolean,
  error:Error
}

export const initialState = {
  list:[],
  loading:false,
  error:Error()
}

export function detailsReducer(state:DetailState = initialState, action:AdminAction){
  switch(action.type){
    case(AdminActionTypes.LOAD_ORDERDETAILS):
    return{
      ...state,
      loading:true
    }

    case(AdminActionTypes.LOAD_ORDERDETAILS_SUCCESS):
    return{
      ...state,
      list: action.payload,
      loading:false
    }

    case(AdminActionTypes.LOAD_ORDERDETAILS_FAILURE):
    return{
      ...state,
      loading:false,
      error:action.payload
    }
  }
}
