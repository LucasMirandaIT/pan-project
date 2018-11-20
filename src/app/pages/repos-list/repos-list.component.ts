import { Component, OnInit } from '@angular/core';
import { RepoListService } from 'src/app/services/repo-list/repo-list.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {

  repositories;
  loading = true;

  constructor(private repoService: RepoListService) { }

  ngOnInit() {
    let username = 'LucasMirandaIT';
    let password = 'luquinhasm2015';
    this.repoService.getRepos(username, password).toPromise().then((response: any) => {
      this.loading = false;
      this.repositories = JSON.parse(response._body);
      console.log(this.repositories);
    });
  }

}
