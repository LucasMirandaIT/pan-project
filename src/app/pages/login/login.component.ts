import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loading: boolean;
  username;
  password;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.loading = true;
    this.auth.login(username, password).toPromise().then((retorno: any) => {
      this.loading = false;
      sessionStorage.setItem('userLogged', retorno._body);
      this.auth.loggedIn.next(true);
      this.router.navigate(['/'])
    }).catch((err: any) => {
      this.loading = false;
      this.auth.loggedIn.next(false);
      alert('Erro! \nVerifique os dados informados e tente novamente!');
    })
  }

}
