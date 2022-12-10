import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
  {path:'add-edit-product',component:AddEditProductComponent},
  {path:'show-product',component:ShowProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
