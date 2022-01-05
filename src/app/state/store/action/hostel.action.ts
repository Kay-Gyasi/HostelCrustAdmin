import { Action } from "@ngrx/store";
import { Customer } from "src/app/models/customer";
import { Order } from "src/app/models/Order";
import { Detail } from "src/app/models/orderDetail";
import { Product } from "src/app/models/product";
import { AdminActionTypes } from "../enum/enum";


export class LoadOrdersAction implements Action {
  readonly type = AdminActionTypes.LOAD_ORDERS;
}

export class LoadOrderSuccessAction implements Action {
  readonly type = AdminActionTypes.LOAD_ORDERS_SUCCESS;

  constructor(public payload:Order[]){}
}

export class LoadOrderFailureAction implements Action {
  readonly type = AdminActionTypes.LOAD_ORDERS_FAILURE;

  constructor(public payload:Error){}
}

export class LoadProductsAction implements Action {
  readonly type = AdminActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSuccessAction implements Action {
  readonly type = AdminActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload:Product[]){}
}

export class LoadProductsFailureAction implements Action {
  readonly type = AdminActionTypes.LOAD_PRODUCTS_FAILURE;

  constructor(public payload:Error){}
}

export class LoadCustomerssAction implements Action {
  readonly type = AdminActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomerSuccessAction implements Action {
  readonly type = AdminActionTypes.LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload:Customer[]){}
}

export class LoadCustomerFailureAction implements Action {
  readonly type = AdminActionTypes.LOAD_CUSTOMERS_FAILURE;

  constructor(public payload:Error){}
}

export class LoadOrderDetailsAction implements Action {
  readonly type = AdminActionTypes.LOAD_ORDERDETAILS;
}

export class LoadOrderDetailSuccessAction implements Action {
  readonly type = AdminActionTypes.LOAD_ORDERDETAILS_SUCCESS;

  constructor(public payload:Detail[]){}
}

export class LoadOrderDetailFailureAction implements Action {
  readonly type = AdminActionTypes.LOAD_ORDERDETAILS_FAILURE;

  constructor(public payload:Error){}
}

export class DeleteOrderAction implements Action {
  readonly type = AdminActionTypes.DELETE_ORDERS;

  constructor(public payload:string){}
}

export class AddCompletedOrderAction implements Action {
  readonly type = AdminActionTypes.ADD_COMPLETED_ORDERS;

  constructor(public payload:Order){}
}

export type AdminAction = LoadOrdersAction |
LoadOrderSuccessAction |
LoadOrderFailureAction |
LoadOrderDetailsAction |
LoadOrderDetailSuccessAction |
LoadOrderDetailFailureAction |
LoadProductsAction |
LoadProductsSuccessAction |
LoadProductsFailureAction |
LoadCustomerssAction |
LoadCustomerSuccessAction |
LoadCustomerFailureAction |
DeleteOrderAction |
AddCompletedOrderAction;
