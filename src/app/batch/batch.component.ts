import { Component } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent {
  formModal: any;
  batchMachineList: any = []

  constructor() { }
  ngOnInit(): void {
    this.AllBatchMachineList();
   

  }
  

  AllBatchMachineList() {
    this.batchMachineList = [
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
  openFormModal() {
    new window.bootstrap.Modal(
      document.getElementById('myModal')
    ).show()
  }
  saveSomeThing() {
   
  }
  

}
