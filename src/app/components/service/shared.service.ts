import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/Order';
import { Detail } from 'src/app/models/orderDetail';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly apiurl = "http://hostelcrust.azurewebsites.net/api/";

constructor(private http:HttpClient) { }

GetProducts():Observable<Array<Product>>{
  return this.http.get<Product[]>(this.apiurl+"Product/GetProducts").pipe(
    map(data => {
      const productArray:Product[] = [];

      for(const id in data){
        if(data.hasOwnProperty(id)){
          productArray.push(data[id])
        }
      }
      return productArray;
    })
  );
}

GetOrders():Observable<Array<Order>>{
  return this.http.get<Order[]>(this.apiurl+"Order/GetOrders").pipe(
    map(data => {
      const orderArray:Order[] = [];

      for(const id in data){
        if(data.hasOwnProperty(id) && data[id].isFulfilled == false){
          orderArray.push(data[id]);
        }
      }
      return orderArray;
    })
  );
}

GetOrderDetails(orderNum:string):Observable<Array<Detail>>{
  return this.http.get<Detail[]>(this.apiurl+"OrderDetail/GetOrderDetails").pipe(
    map(data => {
      const orderArray:Detail[] = [];

      for(const id in data){
        if(data.hasOwnProperty(id) && data[id].orderNum == orderNum){
          orderArray.push(data[id]);
        }
      }
      return orderArray;
    })
  );
}


}
