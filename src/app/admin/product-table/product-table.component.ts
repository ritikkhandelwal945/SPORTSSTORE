import { productRepository } from './../../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {

  constructor(private dataSource:productRepository) { }
  totalProducts:Product[]=[];
  ngOnInit(): void {
  }

  getProducts():Product[]{
    return this.dataSource.getProducts(null);
  }

  deleteProduct(id:number){
    this.dataSource.deleteProduct(id);
  }

}
