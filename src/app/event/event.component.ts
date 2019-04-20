import { Component, OnInit } from '@angular/core';
import { Event } from './Event'
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

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  displayedColumns: string[] = ['name', 'slug', 'date'];
  dataSource = EVENTS;
  constructor() { }

  ngOnInit() {
  }

}
