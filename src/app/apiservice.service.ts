import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:44314/api/';
  readonly apiReportUrl = 'http://localhost:58864/api/';


  constructor(private http:HttpClient) { }

 // Category
 getCategoryList(page:number): Observable<any[]> {
  console.log(page)
  return this.http.get<any[]>(this.apiUrl + 'category/allcategory/{page}?pageNumber='+ page,);
}
addCategory(cat: any): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post<any>(this.apiUrl + 'category/AddCategory', cat, httpOptions);
}
updateCategory(cat: any): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post<any>(this.apiUrl + 'category/UpdateCategory', cat, httpOptions);
}
deleteCategory(catId: number): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post<any>(this.apiUrl + 'category/UpdateCategory'+ catId, httpOptions);
}



 // Product
 getproductList(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + 'product/allproduct');
}
addproduct(pro: any): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post<any>(this.apiUrl + 'product/Addproduct', pro, httpOptions);
}
updateproduct(pro: any): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post<any>(this.apiUrl + 'product/Updateproduct', pro, httpOptions);
}
deleteproduct(proId: number): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post<any>(this.apiUrl + 'product/DeleteCategory/{Id}?id='+ proId, httpOptions);
}
//menu
getAllMenu():Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + 'menu/allmenu');
}
//report
GenerateProductListReport():Observable<any> {

    return this.http.get(this.apiReportUrl + 'Reports/GenerateProductListReport', {responseType: "blob"});
}
GenerateProduct_CategoryWiseList():Observable<any> {

  return this.http.get(this.apiReportUrl + 'Reports/GenerateCategoryWiseProductListReport', {responseType: "blob"});
}
}