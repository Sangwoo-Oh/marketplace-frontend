import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/api/v1/users';
  httpClient: HttpClient = inject(HttpClient);
  constructor() { }
  signUp(userData: NgForm): Observable<any> {
    return this.httpClient.post(this.url + '/sign-up', userData.value);
  }

  signIn(userData: NgForm): Observable<any> {
    return this.httpClient.post(this.url + '/sign-in', userData.value);
  }
}
