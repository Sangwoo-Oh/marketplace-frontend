import { Injectable, inject } from '@angular/core';
import { Item } from '../interface/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url = environment.apiUrl + 'items';
  httpClient: HttpClient = inject(HttpClient);
  constructor() { }

  getItems():Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url);
  }

  getItemsByUserId(id: string):Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url + '/user/' + id);
  }

  getItemById(id: string): Observable<Item> {
    return this.httpClient.get<Item>(this.url + '/' + id);
  }

  createItem(formData: FormData): Observable<any> {
    return this.httpClient.post(this.url + '/item', formData);
  }
}
