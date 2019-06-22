import { Component, OnInit } from '@angular/core';
import { Event } from './Event'
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  displayedColumns: string[] = ['name', 'slug', 'date', 'options'];
  private data: Event[];
  constructor(private eventsService: EventService, private router: Router) {

   }

  ngOnInit() {
    this.data = this.eventsService.getEvents();

  }

  public editar(id: number){
    console.log(id);
    this.router.navigate( ['event/edit/'+ id] );
  }
}
