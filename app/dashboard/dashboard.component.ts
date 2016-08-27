import { Component, OnInit } from '@angular/core';
import { PersonService} from '../person/person.service';
import { Person } from '../person/person-model';

@Component({
    templateUrl: './app/dashboard/dashboard.component.html',

})
export class DashboardComponent {

    persons: Person[];
    error: any;

    constructor() {
    }

   

}