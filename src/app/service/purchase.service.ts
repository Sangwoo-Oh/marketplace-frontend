import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  url = environment.apiUrl + 'purchase';
  httpClient: HttpClient = inject(HttpClient);
  constructor() { }
  getPurchasedItems(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  purchaseItem(data: any): Observable<any> {
    return this.httpClient.post(this.url, data);
  }
}
