import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { flatMap, from } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {
  constructor(private _fb: FormBuilder) { }
  ngOnInit(): void {
    this.frmppEntry = this._fb.group({
      productionDate: "",
      ppNo: "",
      fabricType: "",
      yarnCount: "",
      lotNo: "",
      slNo: "",
      orderQty: ""

    });
    this.Allmachine();
    this.pp_production();

  }
  frmppEntry: any = FormGroup;
  machineList: any;
  pp_production_list: any;
  sData: any;
  scheduleData: any = [];
  tData: any;
  trailerData: any = [];
  toggle: any;
  dragableObj: any = {}
  displayProgress: any = "none";
  ppEntryStyle: any = "none";
  // dragableObj :any={}
  detailsData: any = []

  Allmachine() {
    this.machineList = [
      {
        "No": 14,
        "Dia": 30,
        "GG": 24,
        "data": [{
          "ppNo": "020/21E",
          "fabricType": "Cotton",
          "yarnCount": "29s",
          "lotNo": "v-270",
          "slNo": "2.9",
          "orderQty": "10kg"
        },
        {
          "ppNo": "050/11E",
          "fabricType": "Siro",
          "yarnCount": "29s",
          "lotNo": "v-270",
          "slNo": "2.9",
          "orderQty": "10kg"
        }
        ]
      },

      {
        "No": 16,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 17,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 18,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 19,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 20,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 21,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 22,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 23,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 24,
        "Dia": 30,
        "GG": 24,
        "data": [{
          "ppNo": "001/22C",
          "fabricType": "(1*1) sp rib)",
          "yarnCount": "28s/wl+20D F.F",
          "lotNo": "v-380",
          "slNo": "2.9",
          "orderQty": "20kg"
        }]
      },
    ]
  }

  pp_production() {
    this.pp_production_list = [
      {
        "machineNo": 14,
        "ppNo": "020/21E",
        "fabricType": "Cotton",
        "yarnCount": "29s",
        "lotNo": "v-270",
        "slNo": "2.9",
        "orderQty": "10kg",
        "status":"Added"
      },
      {
        "machineNo": 14,
        "ppNo": "021/22E",
        "fabricType": "Siro",
        "yarnCount": "29s",
        "lotNo": "v-270",
        "slNo": "2.9",
        "orderQty": "10kg",
        "status":"Added"
      },
      {
        "machineNo": 14,
        "ppNo": "024/20E",
        "fabricType": "Cotton",
        "yarnCount": "29s",
        "lotNo": "v-270",
        "slNo": "2.9",
        "orderQty": "10kg",
        "status":"Active"
      },
      {
        "machineNo": 24,
        "ppNo": "024/20E",
        "fabricType": "Melange",
        "yarnCount": "29s",
        "lotNo": "v-270",
        "slNo": "2.9",
        "orderQty": "10kg",
        "status":"Active"
      },
    ]
  }


  dragStartFrom(event: any, data: any) {
    this.dragableObj = data;
    console.log(data)
  }

  onDropTo(event: any, data: any) {
    console.log(data)
    if (data.data.length == 0) {
      data.data.push(this.dragableObj);

      this.dragableObj.data = [];

      console.log(this.machineList)
    }
  }
  onDragOver(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }
  onDragLeave(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.detailsData[event.currentIndex].status !="Active" && this.detailsData[event.previousIndex].status !="Active")
    {
      moveItemInArray(this.detailsData, event.previousIndex, event.currentIndex);
    }
    else(
      alert('Stop the running Production!!!')
    )
    console.log(event.previousIndex,     event.currentIndex )
  }
  openProgress(data: any) {
    this.displayProgress = "block";
    for(var i=0;i<this.pp_production_list.length;i++)
    {
      if(this.pp_production_list[i].machineNo==data)
      {
        this.detailsData.push(this.pp_production_list[i]);
      }
    }

    console.log(this.detailsData)
    if (data == undefined) { this.displayProgress = "none"; }


  }
  
  closePopup() {
    this.displayProgress = "none";
    this.detailsData = []
  }
  ppEntry(data: any) {

    this.displayProgress = "none";
    this.ppEntryStyle = "block";

  }
  closeppEntry() {
    this.displayProgress = "none";
    this.ppEntryStyle = "none";
  }


  SavePP(data: any) {
    console.log(data)
    console.log(this.machineList)

    this.machineList[1].data.push(data)

  }

}