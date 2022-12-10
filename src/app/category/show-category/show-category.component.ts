import { Component,OnInit  } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent {

constructor(private service:ApiserviceService){}


CategoryList: any = [];
ModalTitle = "";
ActivateAddEditCatComp: boolean = false;
cate: any;
editRowId: any;
CatIdFilter = "";
CatNameFilter = "";
CatListWithoutFilter: any = [];

ngOnInit(): void {
  this.refreshDepList();
}
addClick() {
  this.cate = {
    CatId: "0",
    CatName: ""
  }
  this.ModalTitle = "Add Category";
  this.ActivateAddEditCatComp = true;
}

editClick(item: any) {
  this.cate = item;

  this.editRowId=item.Id;
  console.log(this.cate)
  this.ModalTitle = "Edit Category";
  this.ActivateAddEditCatComp = true;
}
updateCategory(item: any) {
  var cat = {
    Id: item.Id,
    Name: item.Name,
    Description:item.Description
  };
  this.service.updateCategory(cat).subscribe(res => {
    alert(" Updated Successfully!")
  });
}

deleteClick(item: any) {
  if (confirm('Are you sure??')) {
    this.service.deleteCategory(item.Id).subscribe(data => {
      alert("Deleted!");
      this.refreshDepList();
    })
  }
}

closeClick() {
  this.ActivateAddEditCatComp = false;
  this.refreshDepList();
}


refreshDepList() {
  this.service.getCategoryList().subscribe(data => {
    this.CategoryList = data;
    this.CatListWithoutFilter = data;
  });
}


}
