import { OrderService } from './../../model/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html'
})
export class OrderTableComponent implements OnInit {

  constructor(private order:OrderService) { }
  includeshipped:boolean = false;
  ngOnInit() {
  }

  markShipped(order:Order){
    order.shipped = true;
    this.order.updateOrder(order);
  }

  deleteOrder(id:number){
    this.order.deleteOrder(id);
  }

  getOrders(): Order[] {
    return this.order
      .getOrders()
      .filter((o) => this.includeshipped || !o.shipped);
  }
}
