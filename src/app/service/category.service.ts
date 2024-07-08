import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl + 'categories';
  httpClient: HttpClient = inject(HttpClient);
  constructor() { }
  getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url);
  }
}
