import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.auth.login(username, password).toPromise().then((retorno: any) => {
      sessionStorage.setItem('userLogged', retorno._body);
      this.auth.loggedIn.next(true);
      this.router.navigate(['/'])
    }).catch((err: any) => {
      this.auth.loggedIn.next(false);
      console.log('Error at Login', JSON.parse(err._body));
    })
  }

}
