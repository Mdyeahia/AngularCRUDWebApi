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
 // dragableObj :any={}

  Allmachine() {
    this.machineList = [
      {
        "No": 14,
        "Dia": 30,
        "GG": 24,
        "data": [{
          "pp": 1,
          "Fabric Type": "Cotton",
          "S/L": "0.2",
          "Yarn Code": "V-231"
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
          "pp": 4,
          "Fabric Type": "Siro",
          "S/L": "0.2",
          "Yarn Code": "V-231"
        }]
      },
    ]
  }
  

  dragStartFrom(event: any, data: any) {
    this.dragableObj =  data;
  }

  onDropTo(event: any, data: any) {
  
    if(data.data == 0){
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


}