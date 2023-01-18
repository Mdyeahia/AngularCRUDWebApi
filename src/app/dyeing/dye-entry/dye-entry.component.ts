import { Component } from '@angular/core';
import { dyeingpp } from '../../model/dyeingPP.model';
@Component({
  selector: 'app-dye-entry',
  templateUrl: './dye-entry.component.html',
  styleUrls: ['./dye-entry.component.css']
})
export class DyeEntryComponent {
  constructor() { }
  dyeingMachineList:any = [];
  machineNo:any
  capacity:any
  execution_date:any
  totalQty:any
  pp_dyeEntry_List: any = [];
  dyeplan_list:any=[]
  dyeingpp=new dyeingpp()

  ngOnInit(): void {
    this.AllDyeingMachineList();
    this.dyeingpp=new dyeingpp();
    this.pp_dyeEntry_List.push(this.dyeingpp);


  }
  AllDyeingMachineList() {
    this.dyeingMachineList = [
      {
        "no": "1",
        "capacity": "90"
      },
      {
        "no": "2",
        "capacity": "360"
      },
      {
        "no": "3",
        "capacity": "720"
      },
      {
        "no": "4",
        "capacity": "1000"
      },
      {
        "no": "5",
        "capacity": "500"
      },
      {
        "no": "6",
        "capacity": "1000"
      }
    ]
  }
  setCapacity(data:any){

    for(var i=0;i<this.dyeingMachineList.length;i++)
    {
      if(this.dyeingMachineList[i].no==data)
      {
        this.capacity=this.dyeingMachineList[i].capacity
      }
    }
    this.dyeingpp.mNo=data;
    this.machineNo=data;

  }
  addForm() {
    this.dyeingpp=new dyeingpp();
    this.dyeingpp.mNo=this.machineNo;
    this.pp_dyeEntry_List.push(this.dyeingpp);

  }
  removeitem(i:any){
    this.pp_dyeEntry_List.splice(i);
  }
  onsubmit(){
    this.dyeplan_list=[]
    for(var i=0;i<this.pp_dyeEntry_List.length;i++)
    {
     this.dyeplan_list.push(this.pp_dyeEntry_List[i])
    }

     console.log(this.dyeplan_list)
   }
}
