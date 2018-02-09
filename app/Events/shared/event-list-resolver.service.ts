import {Injectable} from '@angular/core'
import {EventService} from './event.service'
import {Resolve} from '@angular/router'


@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService:EventService){
  }
  resolve() {
    //map retorna el dato mapeado a esa variable
    return this.eventService.getEvents().map(events => events)
  }
}
