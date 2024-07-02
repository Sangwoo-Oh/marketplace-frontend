import { Injectable, inject } from '@angular/core';
import { Item } from '../interface/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url = 'http://localhost:3000/api/v1/items';
  httpClient: HttpClient = inject(HttpClient);
  constructor() { }

  getItems():Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url);
  }
  getItemById(id: string): Observable<Item> {
    return this.httpClient.get<Item>(this.url + '/' + id);
  }

  createItem(formData: FormData): Observable<any> {
    return this.httpClient.post(this.url + '/item', formData);
  }
}
