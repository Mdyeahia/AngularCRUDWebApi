import { Component ,OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {
  constructor(private service: ApiserviceService) { }
  @Input() pro: any;
  ProId = "";
  ProName = "";
  ProDescription="";
  ProCategoryId = "";

  ProductList: any = [];
  categoryList: any = [];

  ActivateAddEditProduct: boolean = false;
  ngOnInit(): void {

    this.ProId = this.pro.Id;
    this.ProName = this.pro.Name;
    this.CategoryList();
    console.log(this.ProId,this.ProName)
  }
  refreshProList() {
    this.service.getproductList().subscribe(data => {
      this.ProductList = data;
    });
  }
  addProduct() {
    var pro = {
      Name: this.ProName,
      CategoryId: this.ProCategoryId,
      Description:this.ProDescription
    };
    this.service.addproduct(pro).subscribe(res => {
      alert(res);
      this.ActivateAddEditProduct=false;
      this.refreshProList();
      
    });
  }

  updateProduct() {
    var cat = {
      Id: this.ProId,
      Name: this.ProName
    };
    this.service.updateCategory(cat).subscribe(res => {
      alert(res.toString());
    });
  }
  CategoryList(){
    this.service.getCategoryList().subscribe(data => {
      this.categoryList = data;
    });
  }

}
