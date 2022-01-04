import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { SharedService } from "src/app/service/shared.service";
import { LoadCustomerFailureAction, LoadCustomerssAction, LoadCustomerSuccessAction, LoadOrderDetailsAction, LoadOrderFailureAction, LoadOrdersAction, LoadOrderSuccessAction, LoadProductsAction, LoadProductsFailureAction, LoadProductsSuccessAction } from "../store/action/hostel.action";
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

    constructor(private service:SharedService, private actions$:Actions){}
}
