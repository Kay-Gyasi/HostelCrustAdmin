import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { SharedService } from "src/app/components/service/shared.service";
import { LoadCustomerFailureAction, LoadCustomerssAction, LoadCustomerSuccessAction } from "../store/action/hostel.action";
import { AdminActionTypes } from "../store/enum/enum";

@Injectable()
export class CustomerEffects{
  loadCustomers$ = createEffect(() => this.actions$
    .pipe(
        ofType<LoadCustomerssAction>(AdminActionTypes.LOAD_CUSTOMERS),
        mergeMap(
            () => this.service.GetCustomers()
            .pipe(
                map(data => new LoadCustomerSuccessAction(data)),
                catchError(error =>of(new LoadCustomerFailureAction(error)))
            )
        )
    ));

    constructor(private service:SharedService, private actions$:Actions){}
}
