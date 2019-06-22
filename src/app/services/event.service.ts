import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import {Event} from './../event/event';

const EVENTS: Event[] = [
    {
      id: 1,
      name: 'Ritual Fest',
      slug: 'ritual-2020',
      date: new Date('2020-01-01'),
      location: 'Zayulita',
      isActive: true
    },
    {
      id: 2,
      name: 'Wonderland Fest',
      slug: 'wonderland-2019',
      date: new Date('2019-01-01'),
      location: 'Monterrey',
      isActive: true
    },
  ];

  @Injectable({
    providedIn: 'root'
  })

export class EventService {
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

    public getEvents(){
        return EVENTS;
    }
}
