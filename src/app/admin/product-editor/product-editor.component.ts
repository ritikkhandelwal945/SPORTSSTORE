import { NgForm } from '@angular/forms';
import { productRepository } from './../../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',

})
export class ProductEditorComponent implements OnInit {

  editing:boolean=false;
  product = new Product();
  constructor(private activeRoute:ActivatedRoute,
              private repo:productRepository) {
    console.log(activeRoute);
    this.editing = this.activeRoute.snapshot.params['mode'] == "edit";
    if(this.editing){
      Object.assign(this.product,this.repo.getProduct(activeRoute.snapshot.params['id']));
    }
   }

   saveProduct(form:NgForm){
    console.log(form);
    setTimeout(()=>
    this.repo.saveProduct(this.product),1000
    )
   }

  ngOnInit() {
  }






}
