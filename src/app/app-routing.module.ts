import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'category',loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)},
  {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  {path:'machine',loadChildren:()=>import('./machine/machine.module').then(m=>m.MachineModule)},
  {path:'batch',loadChildren:()=>import('./batch/batch.module').then(m=>m.BatchModule)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
