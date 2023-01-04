import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {
  ngOnInit(): void {
    this.Allmachine();
  }
  machineList: any;
  sData: any;
  scheduleData: any = [];
  tData: any;
  trailerData: any = [];
  toggle:any;
  dragableObj :any={}
  displayStyle:any = "none";
 // dragableObj :any={}
 detailsData:any={}

  Allmachine() {
    this.machineList = [
      {
        "No": 14,
        "Dia": 30,
        "GG": 24,
        "data": [{
          "pp": "020/21E",
          "fabricType": "Cotton",
          "sl": "0.2",
          "yarnCode": "V-231"
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
          "pp": "001/22C",
          "fabricType": "Siro",
          "sl": "0.2",
          "yarnCode": "V-231"
        }]
      },
    ]
  }
  

  dragStartFrom(event: any, data: any) {
    this.dragableObj =  data;
  }

  onDropTo(event: any, data: any) {
  
    if(data.data.length == 0){
      data.data.push(this.dragableObj.data);

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
    
    
     this.detailsData=data==undefined?{}:data
     if(data==undefined){this.displayStyle = "none";}
   
    
  }
  closePopup() {
    this.displayStyle = "none";
    this.detailsData={}
  }

}