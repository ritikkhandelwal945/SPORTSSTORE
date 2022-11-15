import { CartService } from './../model/cart.Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cartSummary',
  templateUrl: 'cartSummary.component.html'
})

export class CartSummaryComponent implements OnInit {
  constructor(public cartService:CartService) { }

  ngOnInit() {

   }

  //   get count(){
  //   return this.cartService.itemQuantity;
  //  }

  //  itemCount:number = this.cartService.itemQuantity;
  //  totalPrice = this.cartService.price;
}
