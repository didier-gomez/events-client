import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user;
  constructor(private appAuthService: AuthService) { }

  ngOnInit() {
    this.user = this.appAuthService.getUser();
    console.log(this.user);
  }

}
