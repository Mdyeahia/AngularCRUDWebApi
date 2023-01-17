import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { flatMap, from } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {
  constructor(private _fb: FormBuilder) { }
  ngOnInit(): void {
    this.frmppEntry = this._fb.group({
      machineNo: "",
      productionDate: "",
      ppNo: "",
      fabricType: "",
      yarnCount: "",
      lotNo: "",
      slNo: "",
      orderQty: "",
      status: "",
      startTime: "",
      assignQty: "",
      completeQty: "",

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
  ppCompletionForm:any="none"
  // dragableObj :any={}
  detailsData: any = []
  assignMachine: any;
  orderQty: any;
  assignQty:any;
  completeQty:any;
  ppNo:any;

  Allmachine() {
    this.machineList = [
      {
        "No": 14,
        "Dia": 30,
        "GG": 24,
        "type": "S/J",
        "brand": "MAYER & CIE",
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
        "type": "RIB",
        "brand": "MAYER & CIE",
        "data": []
      },
      {
        "No": 17,
        "Dia": 30,
        "GG": 24,
        "type": "S/J",
        "brand": "MAYER & CIE",
        "data": []
      },
      {
        "No": 18,
        "Dia": 30,
        "GG": 24,
        "type": "S/J",
        "brand": "MAYER & CIE",
        "data": []
      },
      {
        "No": 19,
        "Dia": 30,
        "GG": 24,
        "type": "S/J",
        "brand": "MAYER & CIE",
        "data": []
      },
      {
        "No": 20,
        "Dia": 30,
        "GG": 24,
        "type": "S/J",
        "brand": "MAYER & CIE",
        "data": []
      },
      {
        "No": 21,
        "Dia": 30,
        "GG": 24,
        "type": "S/J",
        "brand": "MAYER & CIE",
        "data": []
      },
      {
        "No": 22,
        "Dia": 30,
        "GG": 24,
        "type": "S/J",
        "brand": "MAYER & CIE",
        "data": []
      },
      {
        "No": 23,
        "Dia": 30,
        "GG": 24,
        "type": "FLEECE",
        "brand": "MAYER & CIE",
        "data": []
      },
      {
        "No": 24,
        "Dia": 30,
        "GG": 24,
        "type": "S/J",
        "brand": "MAYER & CIE",
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
        "assignQty":"",
        "completeQty":"",
        "startTime": "",
        "status": "Added"
      },
      {
        "machineNo": 14,
        "ppNo": "021/22E",
        "fabricType": "Siro",
        "yarnCount": "29s",
        "lotNo": "v-270",
        "slNo": "2.9",
        "orderQty": "10kg",
        "assignQty":"",
        "completeQty":"",
        "startTime": "",
        "status": "Added"
      },
      {
        "machineNo": 14,
        "ppNo": "024/20E",
        "fabricType": "Cotton",
        "yarnCount": "29s",
        "lotNo": "v-270",
        "slNo": "2.9",
        "orderQty": "100",
        "assignQty":"50",
        "completeQty":"",
        "startTime": "12-01-2023 09:30:56 am",
        "status": "Active"
      },
      {
        "machineNo": 24,
        "ppNo": "026/20E",
        "fabricType": "Melange",
        "yarnCount": "29s",
        "lotNo": "v-270",
        "slNo": "2.9",
        "orderQty": "10kg",
        "assignQty":"",
        "completeQty":"",
        "startTime": "",
        "status": "Added"
      },
    ]
  }


  dragStartFrom(event: any, data: any) {
    this.dragableObj = data;
  }

  onDropTo(event: any, data: any) {

    this.dragableObj.machineNo = data.No;
    if (data.data.length == 0) {

      data.data.push(this.dragableObj);

      this.dragableObj.data = [];
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

  // drop(event: CdkDragDrop<string[]>) {
  //   if (this.detailsData[event.currentIndex].status != "Active" && this.detailsData[event.previousIndex].status != "Active") {
  //     moveItemInArray(this.detailsData, event.previousIndex, event.currentIndex);
  //   }
  //   else (
  //     alert('Stop the running Production!!!')
  //   )
  //   console.log(event.previousIndex, event.currentIndex)
  // }
  openProgress(data: any) {
    this.displayProgress = "block";
    this.detailsData=[];
    for (var i = 0; i < this.pp_production_list.length; i++) {
      if (this.pp_production_list[i].machineNo == data) {
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
    this.assignMachine = data.No;
    this.displayProgress = "none";
    this.ppEntryStyle = "block";

  }
  closeppEntry() {
    this.displayProgress = "none";
    this.ppEntryStyle = "none";
    this.ppCompletionForm="none"
  }


  SavePP(data: any) {
    data.status = "Added"
    // data.startTime=formatDate(new Date(), 'dd-MM-yyyy h:mm:ss', 'en-US');


    // console.log(data.startTime)

    console.log(this.pp_production_list)

    this.pp_production_list.push(data)

  }

  ppCompleteEntry(data: any) {

    for(var i=0;i<this.pp_production_list.length;i++)
    {
      if(this.pp_production_list[i].ppNo==data.ppNo)
      {
        this.pp_production_list[i].completeQty=data.completeQty,
        this.pp_production_list[i].assignQty=0,
        this.pp_production_list[i].status="Added"


      }
    }

    console.log(this.pp_production_list)

  }

  ProductionStart(pp: any, m: any) {
    let spp = this.pp_production_list.filter(function (obj: any) { return obj.ppNo == pp && obj.machineNo == m });
    spp[0].startTime = formatDate(new Date(), 'dd-MM-yyyy h:mm:ss', 'en-US');
    spp[0].status = "Active";
    console.log(spp,pp)

    console.log(this.pp_production_list)
  }
  ProductionStop(pro:any) {
    // let spp = this.pp_production_list.filter(function (obj: any) { return obj.ppNo == pp && obj.machineNo == m });
    // spp[0].stopTime = formatDate(new Date(), 'dd-MM-yyyy h:mm:ss', 'en-US');
    // spp[0].status = "Added";
    // console.log(spp,pp)

    // console.log(this.pp_production_list)
    this.ppNo=pro.ppNo;
    this.orderQty=pro.orderQty;
    this.assignQty=pro.assignQty;
    this.completeQty=pro.completeQty;

    this.displayProgress = "none";
    this.ppEntryStyle = "none";
    this.ppCompletionForm="block"
  }
  ppColor(data: any) {
    let ppin = "";
    for (var i = 0; i < this.pp_production_list.length; i++) {
      if (this.pp_production_list[i].machineNo == data) {
        if (this.pp_production_list[i].status == "Active") {
          ppin = "red";
          break;
        }
        else if (this.pp_production_list[i].status == "Added") {
          ppin = "yellow";

        }

        else {
          ppin = "green";
        }
      }
      else {
        ppin = "green";
      }
    }
    //console.log(data, ppin)
    return ppin;
  }

}