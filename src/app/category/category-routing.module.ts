import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';

const routes: Routes = [
  {path:'add-edit-category',component:AddEditCategoryComponent},
  {path:'show-category',component:ShowCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
