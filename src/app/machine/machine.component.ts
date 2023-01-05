import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {
  constructor(private _fb: FormBuilder) {}
  ngOnInit(): void {
    this.frmppEntry = this._fb.group({  
      productionDate: "",
      ppNo:"",
      fabricType:"",
      yarnCount:"",
      lotNo:"",
      slNo:"",
      orderQty:""

  });
    this.Allmachine();
  }
  frmppEntry:any= FormGroup;
  machineList: any;
  sData: any;
  scheduleData: any = [];
  tData: any;
  trailerData: any = [];
  toggle:any;
  dragableObj :any={}
  displayStyle:any = "none";
  ppEntryStyle:any = "none";
 // dragableObj :any={}
 detailsData:any={}

  Allmachine() {
    this.machineList = [
      {
        "No": 14,
        "Dia": 30,
        "GG": 24,
        "data": [{
          "ppNo": "020/21E",
          "fabricType": "Cotton",
          "yarnCount":"29s",
          "lotNo":"v-270",
          "slNo": "2.9",
          "orderQty": "10kg"
        }]
      },

      {
        "No": 15,
        "Dia": 30,
        "GG": 24,
        "data": []
      },
      {
        "No": 16,
        "Dia": 30,
        "GG": 24,
        "data": [{
          "ppNo": "001/22C",
          "fabricType": "(1*1) sp rib)",
          "yarnCount":"28s/wl+20D F.F",
          "lotNo":"v-380",
          "slNo": "2.9",
          "orderQty": "20kg"
        }]
      },
    ]
  }
  

  dragStartFrom(event: any, data: any) {
    this.dragableObj =  data;
  }

  onDropTo(event: any, data: any) {
  
    if(data.data.length == 0){
      data.data.push(this.dragableObj.data[0]);

      this.dragableObj.data=[];

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
  
  
  openPopup(data:any) {
    this.displayStyle = "block";
    
    
     this.detailsData=data
     console.log(this.detailsData.data.length)
     if(data==undefined){this.displayStyle = "none";}
   
    
  }
  closePopup() {
    this.displayStyle = "none";
    this.detailsData={}
  }
  ppEntry(data:any){
    if(data.data.length == 0){
    this.displayStyle = "none";
    this.ppEntryStyle="block";
    }
    this.displayStyle = "none";
  }
  closeppEntry(){
    this.displayStyle = "none";
    this.ppEntryStyle="none";
  }


  SavePP(data:any){
    console.log(data)
    console.log(this.machineList)

    this.machineList[1].data.push(data)

  }

}