import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from './person-model';
import { PersonService } from './person.service';

@Component({
    templateUrl: './app/person/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

    person: Person;
    @Output() close = new EventEmitter();
    error: any;

    constructor(private personService: PersonService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = params['id'];
                this.personService.getPerson(id)
                    .then(person => this.person = person);
            }
        });
    }

    save() {
        this.personService
            .save(this.person)
            .then(person => {
                this.person = person;
                this.goBack(person);
            })
            .catch(error => this.error = error);
    }

    goBack(savedPerson: Person = null) {
        this.close.emit(savedPerson);
    }
}
