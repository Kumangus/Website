"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var person_service_1 = require('./person.service');
var PersonComponent = (function () {
    function PersonComponent(router, _personService) {
        this.router = router;
        this._personService = _personService;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.getPersons();
    };
    PersonComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    PersonComponent.prototype.getPersons = function () {
        var _this = this;
        this._personService.getPersons()
            .then(function (persons) { return _this.persons = persons; })
            .catch(function (error) { return _this.error = error; });
    };
    PersonComponent.prototype.delete = function (person, event) {
        var _this = this;
        event.stopPropagation();
        this._personService
            .delete(person)
            .then(function (res) {
            console.log(res);
            _this.persons = _this.persons.filter(function (h) { return h !== person; });
            if (_this.selectedPerson === person) {
                _this.selectedPerson = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    PersonComponent.prototype.edit = function (person, event) {
        event.stopPropagation();
        this.router.navigate(['/detail', person.id]);
    };
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'persons',
            templateUrl: './app/person/person.component.html',
            styleUrls: ['./app/person/person.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, person_service_1.PersonService])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map