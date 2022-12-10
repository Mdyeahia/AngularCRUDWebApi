import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {
  constructor(private service:ApiserviceService){}


  
ProductList: any = [];
ModalTitle = "";
ActivateAddEditProduct: boolean = false;
pro: any;
editRowId: any;

ngOnInit(): void {
  this.refreshProList();
}
addClick() {
  this.pro = {
    ProId: "0",
    ProName: ""
  }
  this.ModalTitle = "Add Product";
  this.ActivateAddEditProduct = true;
}

editClick(item: any) {
  this.pro = item;

  this.editRowId=item.Id;
  console.log(this.pro)
  this.ModalTitle = "Edit progory";
  this.ActivateAddEditProduct = true;
}
updateproduct(item: any) {
  var pro = {
    Id: item.Id,
    Name: item.Name,
    CategoryId:item.CategoryId,
    Description:item.Description
  };
  this.service.updateproduct(pro).subscribe(res => {
    alert(" Updated Successfully!")
  });
}

deleteClick(item: any) {
  if (confirm('Are you sure??')) {
    this.service.deleteproduct(item.Id).subscribe(data => {
      alert("Deleted!");
      this.refreshProList();
    })
  }
}

closeClick() {
  this.ActivateAddEditProduct = false;
  this.refreshProList();
}


refreshProList() {
  this.service.getproductList().subscribe(data => {
    console.log(data)
    this.ProductList = data;
  });
}
}
