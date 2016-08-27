import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend }             from '@angular/http';
import { InMemoryBackendService, SEED_DATA }  from 'angular2-in-memory-web-api';
import { InMemoryDataService }                from './api/in-memory-data.service';

import { DashboardComponent }       from './dashboard/dashboard.component';
import { PersonComponent }          from './person/person.component';
import { AppComponent }             from './app.component';
import { Routing }                  from './app.routing';
import { PersonService }            from './person/person.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    HttpModule
  ],
   providers: [
    PersonService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
