import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:SharedService) { }

  products:Product[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    return this.service.GetProducts().subscribe({
      next: data => {this.products = data}
    })
  }

}
