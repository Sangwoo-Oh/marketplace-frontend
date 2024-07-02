import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:3000/api/v1/categories';
  httpClient: HttpClient = inject(HttpClient);
  constructor() { }
  getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url);
  }
}
