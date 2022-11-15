import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from './product';
import { Order } from './order.model';

const PROTOCOL = 'http';
const PORT = 3400;
@Injectable()
export class RestDatasource {
  baseUrl : string;
  auth_token:string;

  constructor(private http:HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  saveOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.baseUrl+"orders",order);
  }

  // authenticate(user:string,pass:string):Observable<Boolean>{
  //   return this.http.post<any>(this.baseUrl)
  // }

  saveProduct(product:Product){
    return this.http.post<Product>(this.baseUrl+"products",product,this.getOptions())
  }

  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,product,this.getOptions());
  }

  deleteProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}products/${id}`);
  }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl+"orders",this.getOptions());
  }

  updateOrder(order:Order):Observable<Order>{
    return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,order,this.getOptions());
  }

  deleteOrder(id:number):Observable<Order>{
    return this.http.delete<Order>(`${this.baseUrl}orders/${id}`,this.getOptions());
  }

  private getOptions(){
    return {
      headers: new HttpHeaders({
        "Authorization" : `Bearer<${this.auth_token}>`
      })
    }
  }
}
