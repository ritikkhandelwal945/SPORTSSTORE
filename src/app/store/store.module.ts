import { CartSummaryComponent } from './cartSummary.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartService } from '../model/cart.Service';
import { modelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CartDetail } from './cartDetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [modelModule,CommonModule,RouterModule,FormsModule],
  exports: [StoreComponent],
  declarations: [StoreComponent,CartSummaryComponent,CartDetail, CheckoutComponent],
  providers: [CartService],
})

export class StoreModule { }
