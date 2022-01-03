import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:SharedService, private route:ActivatedRoute) { }

  products:Product[];

  product:string;

  ngOnInit() {
    this.product = this.route.snapshot.params['prod'];

    this.getProducts();
  }

  getProducts(){
    return this.service.GetProducts().subscribe({
      next: data => {this.products = data}
    })
  }

  getEdit(){
    return 'edit/' + this.product;
  }

}
