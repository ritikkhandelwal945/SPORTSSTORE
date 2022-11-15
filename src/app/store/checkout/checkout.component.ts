import { OrderService } from './../../model/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public orderepo:OrderService,
              public order:Order
              ) { }

  orderSent:boolean=false;
  submitted:boolean=false;
  ngOnInit(): void {
  }

  submitOrder(form:NgForm){
    console.log(form);
    // this.orderSent = true;
    this.submitted = true;
    if(form.valid){
      this.orderepo.saveOrder(this.order).subscribe(()=>{
      this.order.clear();
      this.orderSent = true;
      this.submitted = false;
      })
    }
  }
}

