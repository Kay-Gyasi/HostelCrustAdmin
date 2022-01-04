import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { LoadProductsAction } from 'src/app/state/store/action/hostel.action';
import { AppState } from 'src/app/state/store/reducer';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:SharedService, private route:ActivatedRoute,
    private store:Store<AppState>) { }

  products$:Observable<Product[]>;

  loading$:Observable<boolean>;

  error$:Observable<Error>

  ngOnInit() {
    this.products$ = this.store.select((store) => store.product.list);
    this.loading$ = this.store.select((store) => store.product.loading);
    this.error$ = this.store.select((store) => store.product.error);

    this.store.dispatch(new LoadProductsAction);
  }

  getEdit(prod:string){
    return 'edit/' + prod;
  }
}
