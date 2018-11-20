import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = new BehaviorSubject<boolean>(false);
  userLogged: User;

  constructor(private http: Http, private router: Router) { }

  get isLoggedIn() {
    if (this.loggedIn) {
      let userLogged = sessionStorage.getItem('userLogged');
      if(userLogged) {
        this.loggedIn.next(true);
      }
    }
    return this.loggedIn.asObservable();
  }


  login(username, password) {
    let headers: Headers = new Headers();
    let userAuth = `${username}:${password}`;
    headers.append("Authorization", "Basic "+ btoa(userAuth));
    return this.http.get(environment.URL_GITHUB_AUTH, {headers: headers});
  }

  logout() {
    sessionStorage.removeItem('userLogged');
    this.router.navigate(['/login']);
    this.loggedIn.next(false);
  }
}
