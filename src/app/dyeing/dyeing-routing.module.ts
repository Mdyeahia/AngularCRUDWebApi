import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DyeingDashboardComponent} from './dyeing-dashboard/dyeing-dashboard.component';
import { DyeEntryComponent } from './dye-entry/dye-entry.component';
import { DyeingListComponent } from './dyeing-list/dyeing-list.component';

const routes: Routes = [
  {path:'dyeing-dashboard',component:DyeingDashboardComponent},
  {path:'dye-entry',component:DyeEntryComponent},
  {path:'dyeing-list',component:DyeingListComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DyeingRoutingModule { }
