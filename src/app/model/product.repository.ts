import { RestDatasource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class productRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDatasource) {
    dataSource.getProducts().subscribe(data => {
          //console.log(data);
          this.products = data;
          this.categories = data.map(p => p.category).
          filter((c,ind,array) => array.indexOf(c) == ind).sort()
      });
  }

  getProducts(category:string):Product[]{
    return this.products.filter(p=>category == null ||  p.category == category);
  }

  getCategories():string[]{
    return this.categories;
  }

  getProduct(id:number):Product{
    return this.products.find(p=>p.id = id);
  }

  saveProduct(product:Product){
    if(product.id == null || product.id == 0){
      this.dataSource.saveProduct(product).subscribe((prod)=>{
        console.log(prod);
        this.products.push(prod);
      })
    }else{
      this.dataSource.updateProduct(product).subscribe((data)=>{
        console.log(data);
        this.products.splice(this.products.findIndex(p=>p.id == product.id),1,data);
      })
    }
  }

  deleteProduct(id:number){
    this.dataSource.deleteProduct(id).subscribe((data)=>
    this.products.splice(this.products.findIndex(p=>p.id == id),1))
  }
}
