import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService as AppAuthService } from '../auth/auth.service';
import { User } from '../models/user';
import {
  AuthService as SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  public hidePassword;

  constructor( private appAuthService: AppAuthService,
    private socialAuthService: SocialAuthService,
    private router: Router,
    private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.hidePassword = true;
  }

  ngOnInit() {
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.appAuthService.login(this.registerForm.value).subscribe(res => {
      this.router.navigateByUrl('/feedback');
    });
  }

  public facebookLogin() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
          const user = new User();
          user.email = userData.email;
          user.fb_id = userData.id;
          user.name = userData.name;
          user.fb_token = userData.token;
          user.image = userData.image;
          this.appAuthService.handleFbLogin(user).subscribe(res => {
            this.router.navigateByUrl('/feedback');
          });
       }
    );
}


}
