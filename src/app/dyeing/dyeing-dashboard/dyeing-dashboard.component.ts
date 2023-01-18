import { Component, OnInit } from '@angular/core';
import { dyeingpp } from '../../model/dyeingPP.model';
declare var window: any;


@Component({
  selector: 'app-dyeing-dashboard',
  templateUrl: './dyeing-dashboard.component.html',
  styleUrls: ['./dyeing-dashboard.component.css']
})
export class DyeingDashboardComponent{
 
  dyeingMachineList: any = [];
  pp_dyeEntry_List: any = [];
  machineNo:any
  dyeplan_list:any=[]
  dyeingpp=new dyeingpp()


  constructor() { }
  ngOnInit(): void {
    this.AllDyeingMachineList();
    

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
  openFormModal(m:any) {

    this.machineNo=m;
    this.dyeingpp=new dyeingpp();
    this.dyeingpp.mNo=this.machineNo;
    this.pp_dyeEntry_List.push(this.dyeingpp);
    new window.bootstrap.Modal(
      document.getElementById('myModal')
    ).show()
  }

  addForm() {
    this.dyeingpp=new dyeingpp();
    this.dyeingpp.mNo=this.machineNo;
    this.pp_dyeEntry_List.push(this.dyeingpp);

  }
  removeitem(i:any){
    this.pp_dyeEntry_List.splice(i);
  }
  formCancel(){
    this.pp_dyeEntry_List=[]
  }
  onsubmit(){
   for(var i=0;i<this.pp_dyeEntry_List.length;i++)
   {
    this.dyeplan_list.push(this.pp_dyeEntry_List[i])
   }
    
    console.log(this.dyeplan_list)
  }


}
