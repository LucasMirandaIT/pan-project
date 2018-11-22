import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Headers, Http } from '@angular/http';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RepoListService {

  constructor(public http: Http, public authService: AuthService) { }

  getRepos() {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic "+ this.authService.userCredentials);
    return this.http.get(environment.URL_GITHUB_REPO, {headers: headers});
  }
}
