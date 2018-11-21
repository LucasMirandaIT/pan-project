import { Component, OnInit } from '@angular/core';
import { RepoListService } from 'src/app/services/repo-list/repo-list.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {

  repositories;
  userLogged;
  loading = true;

  constructor(private repoService: RepoListService) { }

  ngOnInit() {
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));    
    let username = 'LucasMirandaIT';
    let password = 'luquinhasm2015';
    this.repoService.getRepos(username, password).toPromise().then((response: any) => {
      this.loading = false;
      this.repositories = JSON.parse(response._body);
      console.log(this.repositories);
    });
  }

  tableClick(url) {
    console.log('Clicked');
    window.open(url);
  }
}
