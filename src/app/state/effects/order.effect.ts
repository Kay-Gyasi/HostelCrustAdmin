import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { SharedService } from "src/app/service/shared.service";
import { AddCompletedOrderFailureAction, AddCompletedOrderSuccessAction, DeleteOrderAction, DeleteOrderFailureAction, DeleteOrderSuccessAction, LoadCompletedOrderAction, LoadCompletedOrderFailureAction, LoadCompletedOrderSuccessAction, LoadCustomerFailureAction, LoadCustomerssAction, LoadCustomerSuccessAction, LoadOrderDetailsAction, LoadOrderFailureAction, LoadOrdersAction, LoadOrderSuccessAction, LoadProductsAction, LoadProductsFailureAction, LoadProductsSuccessAction } from "../store/action/hostel.action";
import { AdminActionTypes } from "../store/enum/enum";


@Injectable()
export class OrderEffects{

    loadOrders$ = createEffect(() => this.actions$
    .pipe(
        ofType<LoadOrdersAction>(AdminActionTypes.LOAD_ORDERS),
        mergeMap(
            () => this.service.GetOrders()
            .pipe(
                map(data => new LoadOrderSuccessAction(data)),
                catchError(error =>of(new LoadOrderFailureAction(error)))
            )
        )
    ));

    deleteOrder$ = createEffect(() => this.actions$
    .pipe(
        ofType<DeleteOrderSuccessAction>(AdminActionTypes.DELETE_ORDERS_SUCCESS),
        mergeMap(
            (data) => this.service.DeleteOrder(data.payload.orderID)
            .pipe(
                map(() => new DeleteOrderSuccessAction(data.payload)),
                catchError(error => of(new DeleteOrderFailureAction(error)))
            )
        )
    ));

    AddCompletedOrder$ = createEffect(() => this.actions$
    .pipe(
      ofType<AddCompletedOrderSuccessAction>(AdminActionTypes.ADD_COMPLETED_ORDERS_SUCCESS),
      mergeMap(
        (data) => this.service.PostProcessedOrders(data.payload)
        .pipe(
          map(() => new AddCompletedOrderSuccessAction(data.payload)),
          catchError(error => of(new AddCompletedOrderFailureAction(error)))
        )
      )
    ));

    loadCompletedOrders$ = createEffect(() => this.actions$
    .pipe(
      ofType<LoadCompletedOrderAction>(AdminActionTypes.LOAD_COMPLETED_ORDERS),
      mergeMap(
        () => this.service.GetProcessedOrders()
        .pipe(
          map(data => new LoadCompletedOrderSuccessAction(data)),
          catchError(error => of(new LoadCompletedOrderFailureAction(error)))
        )
      )
    ))

    constructor(private service:SharedService, private actions$:Actions){}
}
