import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PanDevelop';

  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService) { }
  
  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }
}
