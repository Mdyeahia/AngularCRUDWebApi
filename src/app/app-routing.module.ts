import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'category',loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)},
  {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
