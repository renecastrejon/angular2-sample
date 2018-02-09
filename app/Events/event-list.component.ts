//PARENT COMPONENT
import {Component, OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import {ToastrService} from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router'
import {IEvent} from './shared/index'

@Component({
  template:
  `
  <div>
    <h1>Upcoming Events</h1>
    <hr/>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail #thumbnail [event]="event" (click)="handleClickEvent(event.name)"></event-thumbnail>
        </div>
    </div>
      <button class="btn btn-primary">Message</button>
    <!--Esta linea accede a la propiedad del child component-->
    <span>{{thumbnail?.somePropertie}}</span>
  </div>
  `
})
//INPUTS
//<event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
//Esta linea especifica que el componente event-thumbnail
//tiene un input llamado event y que se le pasa el valor
//de event1(variable definida abajo)
export class EventsListComponent implements OnInit{
  events:IEvent[]
  //Datos para mostrar en la aplicacion mediante un servicio,
  constructor(private eventService:EventService, private toastr:ToastrService,
              private route:ActivatedRoute){

  }
  ngOnInit(){
    //Se obtienen datos de forma sincronica
    //this.events = this.eventService.getEvents()

    //Asi se obtienen datos de forma asincronica
    //this.eventService.getEvents().subscribe(events => { this.events = events })

    //Si se requiere esperar a que la llamada asincronica termine
    //y despues cargar el componente ya con los datos, entonces se debe utilizar resolve
    this.events = this.route.snapshot.data['events']
  }
  handleClickEvent(eventName){
    this.toastr.success(eventName)
  }
}
