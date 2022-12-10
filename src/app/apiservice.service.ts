import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:44314/api/';

  constructor(private http:HttpClient) { }

 // Category
 getCategoryList(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + 'category/allcategory');
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
  return this.http.post<any>(this.apiUrl + 'product/Updateproduct'+ proId, httpOptions);
}
//menu
getAllMenu():Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + 'menu/allmenu');
}


}