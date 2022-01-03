import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service:SharedService) { }

  orders:Order[];

  ngOnInit() {
    this.ordersFunc();
  }

  ordersFunc(){
    return this.service.GetOrders().subscribe(data => {
      this.orders = data;
      console.log(data);
    })
  }

  trimDate(date:Date){
    var use = date.toString().split('.');
    var time = use.toString().split('T');

    return use[0] + ' ' + time[1];
  }

}
