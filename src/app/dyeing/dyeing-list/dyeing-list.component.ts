import { Component, OnInit,ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { DyeEntryComponent } from '../dye-entry/dye-entry.component'; 
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dyeing-list',
  templateUrl: './dyeing-list.component.html',
  styleUrls: ['./dyeing-list.component.css']
})
export class DyeingListComponent {




 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
  { field: 'mNo'},
  { field: 'ppNo'},
  { field: 'buyerName'},
  { field: 'color' },
  { field: 'quantity' }

];

// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  editable:true
};

// Data that gets displayed in the grid
rowData :any

  constructor(private sharedService: DyeEntryComponent) { }
 
  ngOnInit() {
    let data:any =this.sharedService.dyeEntryData()
    this.rowData = JSON.parse(data)
    console.log(this.rowData)
  }



  // constructor(private sharedService: DyeEntryComponent) { }

  // ngOnInit() {
 
  //   let data:any =this.sharedService.dyeEntryData()
  //   this.dyeplanList=JSON.parse(data)
  //   console.log(this.dyeplanList)
  // }
  // dyeplanList:any

  // ngAfterViewInit() {
  //   let data:any =this.sharedService.dyeEntryData()
  //   this.dyeplanList=JSON.parse(data)
  //   console.log(this.dyeplanList)
  // }
}
