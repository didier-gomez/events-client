import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../Event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EventEditComponent implements OnInit {
  private event: Event
  private events: Event[]
  constructor(private route: ActivatedRoute, private eventsService: EventService) {
   }

  ngOnInit() {
    let id: number;
    this.route.params.subscribe(params =>{
      id = params['id'];
      this.events = this.eventsService.getEvents();
      this.event = this.events.find(event => {
        return event.id == id
      });
      console.log(this.event);
    })
  }

}
