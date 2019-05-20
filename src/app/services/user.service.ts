import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    SERVER = 'http://localhost:3800/api';

    constructor(private http: HttpClient, private router: Router) { }

    public savePreferences(categories: string[], userId: string): Observable<any> {
        const body = {categories: categories, user_id: userId};
        return this.http.post(`${this.SERVER}/user/categories`, body)
            .pipe(
                tap((res: any) => {
                    return res;
            })
        );
    }
}
