import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RepoListService {

  constructor(public http: Http) { }

  getRepos(username, password) {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic "+ btoa("LucasMirandaIT:luquinhasm2015"));
    return this.http.get(environment.URL_GITHUB_REPO, {headers: headers});
  }
}
