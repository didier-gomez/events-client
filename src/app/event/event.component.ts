import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Event } from './Event'
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';
import * as _ from  'lodash';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable <any>

  displayedColumns: string[] = ['name', 'slug', 'date', 'options'];
  private data: Event[];
  constructor(private eventsService: EventService, private router: Router, private cdr: ChangeDetectorRef) {
   }

  ngOnInit() {
    this.data = this.eventsService.getEvents();
  }

  public editar(id: number){
    this.router.navigate( ['event/edit/'+ id] );
  }

  public delete(id: number){
    let indice = _.findIndex(this.data, function(data) { return data.id == id; });
    if(indice != -1){
      this.data.splice(indice, 1);
    }
    this.table.renderRows();
    this.eventsService.updateEvents(this.data);
  }
}