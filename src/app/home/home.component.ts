import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private user;
  constructor(private router: Router, private appAuthService: AuthService) { }

  ngOnInit() {
    this.user = this.appAuthService.getUser();
    if (!this.user.categories || this.user.categories.length === 0) {
      this.router.navigateByUrl('/preferences');
    }
  }

  private navigateTo(link) {
    this.router.navigate(link);
  }
  logout() {
    this.appAuthService.logout();
    this.router.navigateByUrl('/login');
  }

}
