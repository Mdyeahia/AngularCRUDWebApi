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
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgSelectModule } from '@ng-select/ng-select';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MachineComponent } from './machine/machine.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DyeingComponent } from './dyeing/dyeing.component';
import { DyeingDashboardComponent } from './dyeing/dyeing-dashboard/dyeing-dashboard.component';
import { DyeEntryComponent } from './dyeing/dye-entry/dye-entry.component';
import { DyeingListComponent } from './dyeing/dyeing-list/dyeing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AddEditCategoryComponent,
    ShowCategoryComponent,
    AddEditProductComponent,
    ProductComponent,
    ShowProductComponent,
    MachineComponent,
    DyeingComponent,
    DyeingDashboardComponent,
    DyeEntryComponent,
    DyeingListComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    NgSelectModule,
    ScrollingModule,
    InfiniteScrollModule,
    DragDropModule

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
