import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent
} from './events/index'

//Componentes importados
import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navBar.component'
import {ToastrService} from './common/toastr.service'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  //La declaracion de los componentes debe realizarse aqui
  //con la siguiente sentencia
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    NavBarComponent
  ],
  //Declaracion de servicios
  providers:[
  EventService,
  ToastrService,
  EventRouteActivator,
  AuthService,
  EventListResolver,
  {
    provide:'canDeactivateCreateEvent',
    useValue:checkDirtyState
  }
  ],
  //Como este es el componente que esta hasta arriba de la aplicacion
  //se debe hacer un bootstraping, (como un first-run)
  bootstrap: [EventsAppComponent],
})
export class AppModule {

}
function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You havent save. Continue exiting?')
  return true
}
