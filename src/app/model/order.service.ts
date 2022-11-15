import { RestDatasource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable()
export class OrderService {

constructor(private order:Order,
            private dataSource:RestDatasource) { }

private orders: Order[] = [];
private loaded: boolean = false;

 saveOrder(order:Order):Observable<Order>{
  return this.dataSource.saveOrder(order);
 }

 loadOrders(){
  this.loaded = true;
  this.dataSource.getOrders().subscribe((order)=>
  this.orders = order)
 }

 getOrders(){
  if(this.loaded == false){
    this.loadOrders();
  }
  return this.orders;
 }

 updateOrder(order:Order){
  this.dataSource.updateOrder(order).subscribe((data)=>
  //console.log(data);
  this.orders.splice(this.orders.findIndex(p=>p.id == order.id),1,data));
 }

 deleteOrder(id:number){
  this.dataSource.deleteOrder(id).subscribe(()=>{
    this.orders.splice(this.orders.findIndex(o=>o.id == id),1);
  })
 }

}
