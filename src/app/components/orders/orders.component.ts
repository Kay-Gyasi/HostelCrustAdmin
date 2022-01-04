import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { LoadOrdersAction } from 'src/app/state/store/action/hostel.action';
import { AppState } from 'src/app/state/store/reducer';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service:SharedService, private store:Store<AppState>) { }

  orders$:Observable<Order[]>;

  loading$:Observable<boolean>;

  error$:Observable<Error>;

  ngOnInit() {

    this.orders$ = this.store.select((store) => store.order.list);
    this.loading$ = this.store.select((store) => store.order.loading);
    this.error$ = this.store.select((store) => store.order.error);

    this.store.dispatch(new LoadOrdersAction);
  }

  trimDate(date:Date){
    var use = date.toString().split('.');
    var dater = use[0].toString().split('T')[0];
    var timer = use[0].toString().split('T')[1];

    return dater + ', ' + timer;
  }

  details(orderNum:string){
    return 'details/' + orderNum;
  }

  finishOrder(id:number, order:Order){
    this.service.DeleteOrder(id);

    this.service.PostProcessedOrders(order);
  };
}
