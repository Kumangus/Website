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
var PersonDetailComponent = (function () {
    function PersonDetailComponent(personService, route) {
        this.personService = personService;
        this.route = route;
        this.close = new core_1.EventEmitter();
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = params['id'];
                _this.personService.getPerson(id)
                    .then(function (person) { return _this.person = person; });
            }
        });
    };
    PersonDetailComponent.prototype.save = function () {
        var _this = this;
        this.personService
            .save(this.person)
            .then(function (person) {
            _this.person = person;
            _this.goBack(person);
        })
            .catch(function (error) { return _this.error = error; });
    };
    PersonDetailComponent.prototype.goBack = function (savedPerson) {
        if (savedPerson === void 0) { savedPerson = null; }
        this.close.emit(savedPerson);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PersonDetailComponent.prototype, "close", void 0);
    PersonDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './app/person/person-detail.component.html'
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.ActivatedRoute])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map