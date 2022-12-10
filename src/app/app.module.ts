import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { AddEditCategoryComponent } from './category/add-edit-category/add-edit-category.component';
import { ShowCategoryComponent } from './category/show-category/show-category.component';
import { ApiserviceService } from './apiservice.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddEditProductComponent } from './product/add-edit-product/add-edit-product.component';
import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AddEditCategoryComponent,
    ShowCategoryComponent,
    AddEditProductComponent,
    ProductComponent,
    ShowProductComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
