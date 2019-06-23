import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtResponse } from '../models/jwt-response';
import { User } from '../models/user';
import {tap} from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER = 'http://localhost:3800/api';
  authSubject = new BehaviorSubject(false);
  private token: string;
  public redirectUrl: string;

  constructor(private http: HttpClient,
    private router: Router) { }

    public isAuthenticated(): boolean {
      return localStorage.getItem('ACCESS_TOKEN') != null;
    }

    public register(user: User): Observable<JwtResponse> {
      return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/user/register`, user)
      .pipe(
        tap(
          (res: JwtResponse) => {
            if (res) {
              this.setToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            }
          }
        )
      );
    }

    public login(user: User): Observable<JwtResponse> {
      return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/user/login`, user)
      .pipe(
        tap(
          (res: JwtResponse) => {
            if (res) {
              this.setToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            }
          }
        )
      );
    }

    public handleFbLogin(user: User): Observable<JwtResponse> {
      return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/fb/callback`, user)
      .pipe(
        tap(
          (res: JwtResponse) => {
            if (res) {
              this.setToken(res.dataUser.accessToken, res.dataUser.expiresIn);
              this.setUser(res.dataUser);
            }
          }
        )
      );
    }

    public logout() {
      this.token = null;
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('EXPIRES_IN');
      localStorage.removeItem('currentUser');
    }

    private setToken(token: string, expiresIn: string): void {
      localStorage.setItem('ACCESS_TOKEN', token);
      localStorage.setItem('EXPIRES_IN', expiresIn);
      this.token = token;
    }

    private getToken() {
      if (!this.token) {
        this.token = localStorage.getItem('ACCESS_TOKEN');
      }
    }

    public setUser(user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    public getUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
}
