import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  url = 'http://localhost:3000/api/v1/purchase';
  httpClient: HttpClient = inject(HttpClient);
  constructor() { }
  purchaseItem(data: any): Observable<any> {
    return this.httpClient.post(this.url, data);
  }
}
