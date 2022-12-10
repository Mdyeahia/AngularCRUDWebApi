import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUD';
  constructor(private service:ApiserviceService){}

  ngOnInit(): void {
    this.AllmenuList();
  }

  menuList:any=[];


  AllmenuList() {
    this.service.getAllMenu().subscribe(data => {
      
      this.menuList=data;

      console.log(this.menuList)

    });
  }

}
