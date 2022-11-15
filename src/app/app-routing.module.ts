import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartDetail } from './store/cartDetail.component';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"store" ,component:StoreComponent},
  {path:"cart",component:CartDetail},
  {path:"checkout",component:CheckoutComponent},
  {path: "admin",loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)},
  {path:"**",redirectTo:"/store"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
