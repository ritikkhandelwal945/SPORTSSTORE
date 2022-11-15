import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { RestDatasource } from './../model/rest.datasource';
import { OrderTableComponent } from './order-table/order-table.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';

const routes:Routes = [
  {path:"main",
  component:AdminComponent,
  children:[
    {path:"products/:mode/:id",component:ProductEditorComponent},
    {path:"products/:mode",component:ProductEditorComponent},
    {path:"products",component:ProductTableComponent},
    {path:"orders",component:OrderTableComponent},
    {path:"**",redirectTo:"products"}]
  },

  {path:"**",redirectTo:"main"}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [AdminComponent,OrderTableComponent,ProductTableComponent,ProductEditorComponent],
  providers:[RestDatasource]
})

export class AdminModule { }
