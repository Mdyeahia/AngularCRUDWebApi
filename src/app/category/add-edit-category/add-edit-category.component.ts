import { Component ,OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent {


  constructor(private service: ApiserviceService) { }

  @Input() cate: any;
  CatId = "";
  CatName = "";
  CategoryList: any = [];
  ActivateAddEditCatComp: boolean = false;
  ngOnInit(): void {

    this.CatId = this.cate.Id;
    this.CatName = this.cate.Name;
    console.log(this.CatId,this.CatName)
  }
  refreshDepList() {
    this.service.getCategoryList().subscribe(data => {
      this.CategoryList = data;
    });
  }
  addCategory() {
    var cat = {
      Id: this.CatId,
      Name: this.CatName
    };
    this.service.addCategory(cat).subscribe(res => {
      alert(res);
      this.ActivateAddEditCatComp=false;
      this.refreshDepList();
      
    });
  }

  updateCategory() {
    var cat = {
      Id: this.CatId,
      Name: this.CatName
    };
    this.service.updateCategory(cat).subscribe(res => {
      alert(res.toString());
    });
  }

}
