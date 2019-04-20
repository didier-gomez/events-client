import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl: string;

  constructor(private http: HttpClient,
    private router: Router) { }

    public isAuthenticated(): boolean {
      // TODO: make http request to backend and validate auth
      return true;
    }
}
