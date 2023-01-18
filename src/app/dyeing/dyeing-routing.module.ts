import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DyeingDashboardComponent} from './dyeing-dashboard/dyeing-dashboard.component';
import { DyeEntryComponent } from './dye-entry/dye-entry.component';

const routes: Routes = [
  {path:'dyeing-dashboard',component:DyeingDashboardComponent},
  {path:'dye-entry',component:DyeEntryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DyeingRoutingModule { }
