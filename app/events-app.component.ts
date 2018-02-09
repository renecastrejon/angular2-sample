//Para usar las palabras de reservada de angular como '@Component'
import { Component } from '@angular/core'
//Con esto se especifica que es un componente
@Component({
    //Este es un identificador del componente que se puede usar
    //en un HTML, <events-app></events-app>
    selector:'events-app',
    //Con esto se pasa algo para mostrar cuando
    //se cargue el componente
    template:`
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
//Clase que representa un componente a ser exportada
export class EventsAppComponent{
}
