import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Model/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 



  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getCategoryList():Observable<any>{
     console.log("getting all data");
    return this.http.get(`${this.baseUrl}`+"category/all", { responseType: 'json' });
  }

  addCategory(category: Category) {
    console.log("Adding a category");
    return this.http.post(`${this.baseUrl}`+"category/add-category", category);
  }
  
}
