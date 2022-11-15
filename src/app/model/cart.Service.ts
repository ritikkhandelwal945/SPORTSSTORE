import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class CartService {
  constructor() { }
  public totalproducts : cartLine[] = [];
  itemQuantity : number = 0;
  price : number = 0;
  addProducts(product:Product,quantity:number=1){
    let prod = this.totalproducts.find(p=>p.product.id == product.id);
    if(prod != undefined){
      prod.quantity += quantity;
    }else{
      this.totalproducts.push(new cartLine(product,quantity));
    }
    this.recalculate();
  }

  updateQuantity(product:Product,quantity:number){
    let prod = this.totalproducts.find(p=>p.product.id == product.id);
    if(prod != undefined){
      prod.quantity += quantity;
    }
  }

  removeProduct(id:number){
    let index = this.totalproducts.findIndex(p=>p.product.id == id);
      this.totalproducts.splice(index,1);
      this.recalculate();
  }

  clear(){
    this.itemQuantity = 0;
    this.price = 0;
    this.totalproducts = [];
  }

  private recalculate(){
    this.itemQuantity = 0;
    this.price = 0;
    this.totalproducts.forEach(p=>{
      this.itemQuantity += p.quantity;
      this.price += (p.quantity * p.product.price);
      }
    )
  }


}

export class cartLine{
  constructor(public product:Product,public quantity:number){}

  get lineTotal(){
    return this.quantity * this.product.price;
  }
}
