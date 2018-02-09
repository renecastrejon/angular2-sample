//CHILD COMPONENT
import {Component, Input, Output, EventEmitter} from '@angular/core'
import {IEvent} from './shared/index'

@Component({
  selector:'event-thumbnail',
  template:`
  <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
      Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineURL">
      Online URL: \${{event?.onlineURL}}
    </div>
  </div>
  `,
  //Esto es para agregar estilos al HTML a nivel componente
  styles:[`
      .green { color: #20c03a !important; }
      .bold { font-weight:bold; }
      .thumbnail { min-height: 210px; }
      .pad-left { margin-left: 10px; }
    `]
})

export class EventThumbnailComponent{
  //El decorador input dice que este evento vendra de otro component
  //y sera de tipo any
  @Input() event:IEvent
  somePropertie:any
  Message(){
    this.somePropertie = 'master';
  }
  getStartTimeClass(){
    if(this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    return[]
  }
  /*@Output() eventClick = new EventEmitter()
  handleClickMe(){
    //console.log("Yay!");
    this.eventClick.emit(this.event.name);
  }*/
}
