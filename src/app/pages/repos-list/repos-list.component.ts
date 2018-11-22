import { Component, OnInit } from '@angular/core';
import { RepoListService } from 'src/app/services/repo-list/repo-list.service';

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
    this.refreshRepos();
  }

  refreshRepos() {
    this.repoService.getRepos().toPromise().then((response: any) => {
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
