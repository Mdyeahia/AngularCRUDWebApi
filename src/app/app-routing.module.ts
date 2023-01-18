import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'category',loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)},
  {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  {path:'machine',loadChildren:()=>import('./machine/machine.module').then(m=>m.MachineModule)},
  {path:'dyeing',loadChildren:()=>import('./dyeing/dyeing.module').then(m=>m.DyeingModule)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
