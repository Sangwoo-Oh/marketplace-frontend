import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable,map } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = 'http://localhost:3000/api/v1/users';
  httpClient: HttpClient = inject(HttpClient);
  private decodedToken;
  constructor() {
    this.decodedToken = JSON.parse(localStorage.getItem("app-meta") || 'null')
                        || {user_id : "", username : "", exp : 0 };
  }
  getToken() {
    return localStorage.getItem('app-auth');
  }

  signUp(userData: NgForm): Observable<any> {
    return this.httpClient.post(this.url + '/sign-up', userData.value);
  }

  signIn(userData: NgForm): Observable<any> {
    return this.httpClient.post(this.url + '/sign-in', userData.value).pipe(
      map(
        (token)=>{
          this.decodedToken = jwtDecode(token.toString());
          localStorage.setItem('app-auth',token.toString());
          localStorage.setItem('app-meta',JSON.stringify(this.decodedToken));
          return token;
        }
      )
    );
  }

  isAuthenticated() {
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }

  logout() {
    localStorage.removeItem('app-auth');
    this.decodedToken = {user_id : "", username : "", exp : 0 };
  }
}
