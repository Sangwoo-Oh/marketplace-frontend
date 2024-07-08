import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable,Subject,map } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import moment from 'moment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = 'http://localhost:3000/api/v1/users';
  httpClient: HttpClient = inject(HttpClient);
  private decodedToken;
  private signedInUser = new Subject<User>();
  signedInUser$ = this.signedInUser.asObservable();
  private loggedOut = new Subject<boolean>();
  loggedOut$ = this.loggedOut.asObservable();

  private setData(data: User) {
    this.signedInUser.next(data);
  }
  sendData() {
    this.setData({_id: this.decodedToken.user_id, username:this.decodedToken.username});
  }

  constructor() {
    this.decodedToken = JSON.parse(localStorage.getItem("app-meta") || 'null')
                        || {user_id : "", username : "", exp : 0 };
  }
  getToken() {
    return localStorage.getItem('app-auth');
  }

  getUsername() {
    return this.decodedToken.username;
  }

  getUser() {
    return this.decodedToken;
  }

  signUp(userData: NgForm): Observable<any> {
    return this.httpClient.post(this.url + '/sign-up', userData.value);
  }

  isAuthenticated() {
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }

  signIn(userData: NgForm): Observable<any> {
    return this.httpClient.post(this.url + '/sign-in', userData.value).pipe(
      map(
        (token)=>{
          this.decodedToken = jwtDecode(token.toString());
          localStorage.setItem('app-auth',token.toString());
          localStorage.setItem('app-meta',JSON.stringify(this.decodedToken));
          this.sendData();
          return token;
        }
      )
    );
  }

  logout() {
    localStorage.removeItem('app-auth');
    localStorage.removeItem('app-meta');
    this.decodedToken = {user_id : "", username : "", exp : 0 };
    this.loggedOut.next(true);
  }
}
