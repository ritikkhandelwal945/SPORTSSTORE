import { RestDatasource } from './rest.datasource';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { productRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { CartService } from './cart.Service';
import { OrderService } from './order.service';
import { Order } from './order.model';


@NgModule({
  imports:[HttpClientModule],
  providers: [{provide : StaticDataSource,useClass:RestDatasource},RestDatasource,
    OrderService,Order,CommonModule,productRepository,CartService]
})

export class modelModule { }
