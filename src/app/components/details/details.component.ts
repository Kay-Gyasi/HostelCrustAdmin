import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'src/app/models/orderDetail';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:SharedService) { }

  details:Detail[];

  orderNum = '';

  totalCost = 0;

  ngOnInit(): void {
    this.orderNum = this.route.snapshot.params['num'];

    this.getOrderDetails(this.orderNum);

    this.getTotalCost;
  }

  getOrderDetails(num:string){
    return this.service.GetOrderDetails(num).subscribe({
      next: data => {this.details = data}
    })
  }

  getTotalCost(){
    for(const id in this.details){
      this.totalCost += this.details[id].totalPrice;
    }
  }

}
