import { CartService } from './../model/cart.Service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartDetail',
  templateUrl: 'cartDetail.component.html'
})

export class CartDetail implements OnInit {
  constructor(public cart:CartService,private route:Router) { }

  ngOnInit() { }

  navigateToStore(){
    this.route.navigateByUrl("/");
  }

  navigateToCheckOut(){
    this.route.navigateByUrl("/checkout");
  }
}
