import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { LoadCustomerssAction } from 'src/app/state/store/action/hostel.action';
import { AppState } from 'src/app/state/store/reducer';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  users$:Observable<Customer[]>;
  loading$:Observable<boolean>;
  error$:Observable<Error>;

  constructor(private service:SharedService, private store:Store<AppState>) { }

  ngOnInit() {
    this.users$ = this.store.select((store) => store.customer.list);
    this.loading$ = this.store.select((store) => store.customer.loading);
    this.error$ = this.store.select((store) => store.customer.error);

    this.store.dispatch(new LoadCustomerssAction)
  }

}
