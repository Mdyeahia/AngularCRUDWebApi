import { Component } from '@angular/core';

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

  Allmachine() {
    this.machineList = [
      {
        "No": 14,
        "Dia": 30,
        "GG": 24,
        "data": [{
          "id": 1,
          "scheduleId": "Sch001",
          "driverName": "Anand",
          "origin": "Mumbai",
          "destination": "Delhi",
          "trailerNumber": "N/A"
        }]
      },

      {
        "No": 15,
        "Dia": 30,
        "GG": 24,
        "data":[]
      },
    ]
  }

  dragStartFrom(event: any, data: any) {
  
    localStorage.setItem("fromM", JSON.stringify(data.data));
  }
 
  onDropTo(event: any, data: any) {
    if (localStorage.getItem("fromM")) {
      var fromdata = localStorage.getItem("fromM");
      var todata = JSON.parse(data.data);

      console.log(fromdata)
      console.log(todata)




      // var sch = this.scheduleData.find(d => d.scheduleId == data.scheduleId);
      // sch.trailerNumber = trlData.trailerNumber;
      // var index = this.trailerData.findIndex(function (item, i) {
      //   return item.trailerNumber === trlData.trailerNumber
      // });
      // if (index > -1) {
      //   this.trailerData.splice(index, 1);
      // }
    }
  }
  // onDropToTrailer(event:any) {
  //     if (event.dataTransfer.getData("machinePro")) {
  //         var schData = JSON.parse(event.dataTransfer.getData("machinePro"));
  //         var sch = this.scheduleData.find(d => d.trailerNumber == schData.trailerNumber);
  //         sch.trailerNumber = 'N/A';
  //         this.trailerData.push(schData);
  //         this.trailerData.sort(function(a, b) {
  //             return a['trailerNumber'].localeCompare(b['trailerNumber']);
  //         });
  //     }
  // }
  onDragOver(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }
  onDragLeave(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }


}