import { CartSummaryComponent } from './cartSummary.component';
import { productRepository } from './../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../model/cart.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html'
})

export class StoreComponent implements OnInit {
  public productsPerPage = 4;
  public selectedCategory = null;
  public selectedPage = 1;
  constructor(private repository:productRepository,
              private cartSummary:CartService,
              private router:Router) { }

  ngOnInit() { }

  get products():Product[]{
    let pageIndex = (this.selectedPage - 1) * (this.productsPerPage);
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex,pageIndex+this.productsPerPage);
  }

  get categories():string[]{
    return this.repository.getCategories();
  }

  changeCategory(newCategory?:string){
    this.selectedCategory = newCategory;
  }

  changePage(newPage:number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize){
    //console.log(newSize);
     this.productsPerPage = newSize.target.value;
     this.changePage(1);
  }

  get pageNumbers(){
    return Array(Math.ceil(this.repository.
      getProducts(this.selectedCategory).length/this.productsPerPage))
      .fill(0).map((x,i)=> i+1);
  }

  addToCart(product:Product){
    console.log(product);
    this.cartSummary.addProducts(product);
    //this.router.navigateByUrl("/cart");
  }
}
