import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { SharedService } from "src/app/components/service/shared.service";
import { LoadProductsAction, LoadProductsFailureAction, LoadProductsSuccessAction } from "../store/action/hostel.action";
import { AdminActionTypes } from "../store/enum/enum";


@Injectable()
export class ProductEffects{
  loadProducts$ = createEffect(() => this.actions$
    .pipe(
        ofType<LoadProductsAction>(AdminActionTypes.LOAD_PRODUCTS),
        mergeMap(
            () => this.service.GetProducts()
            .pipe(
                map(data => new LoadProductsSuccessAction(data)),
                catchError(error =>of(new LoadProductsFailureAction(error)))
            )
        )
    ));

    constructor(private service:SharedService, private actions$:Actions){}
}
