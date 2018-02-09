import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {EventService} from './event.service'

@Component({
  templateUrl:'app/Events/shared/create-event.component.html',
  styles:[`
      em { float:right; color:#E05C65; padding-left:10px;}
      .error input {background-color:#E3C3C5;}
    `]
})

export class CreateEventComponent implements OnInit{
  isDirty:boolean = true
  event:any
  constructor(private router:Router, private eventService:EventService){
  }

  ngOnInit(){
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel(){
    this.router.navigate(['/events'])
  }
}
