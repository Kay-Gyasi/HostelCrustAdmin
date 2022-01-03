import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  users:Customer[];

  constructor(private service:SharedService) { }

  ngOnInit() {
    this.Customers();
  }

  Customers(){
    this.service.GetCustomers().subscribe({
      next: data => {this.users = data}
    })
  }

}
