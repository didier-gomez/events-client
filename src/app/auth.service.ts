import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getActivities():  Observable<string[]> {
    // TODO: implement http interceptor and retrieve from db
    const activities: string[] = ['Events', 'Users'];
    const result: Observable<string[]> = from(new Promise(resolve => resolve(activities)));
    return result;
  }
}
