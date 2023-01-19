import { Component, OnInit } from '@angular/core';
import { DyeEntryComponent } from '../dye-entry/dye-entry.component'; 
@Component({
  selector: 'app-dyeing-list',
  templateUrl: './dyeing-list.component.html',
  styleUrls: ['./dyeing-list.component.css']
})
export class DyeingListComponent implements OnInit {

  constructor(private sharedService: DyeEntryComponent) { }

  ngOnInit() {
 
    let data:any =this.sharedService.dyeEntryData()
    this.dyeplanList=JSON.parse(data)
    console.log(this.dyeplanList)
  }
  dyeplanList:any

  // ngAfterViewInit() {
  //   let data:any =this.sharedService.dyeEntryData()
  //   this.dyeplanList=JSON.parse(data)
  //   console.log(this.dyeplanList)
  // }
}
