/*
  main.ts se encarga de cargar el modulo inicial
  Este archivo debe cargarse antes en index.html
  SECUENCIA:
  1. index.html => Carga systemjs.js que contiene una config. para cargar main.ts
  2. main.ts => Contiene la configuracion para hacer el bootstraping

*/

import { platformBrowserDynamic } from
    '@angular/platform-browser-dynamic'

import { AppModule } from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule)
