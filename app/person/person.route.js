"use strict";
var person_component_1 = require('./person.component');
var person_detail_component_1 = require('./person-detail.component');
// Route Configuration
exports.PersonRoutes = [
    { path: 'person', component: person_component_1.PersonComponent },
    { path: 'detail/:id', component: person_detail_component_1.PersonDetailComponent }
];
//# sourceMappingURL=person.route.js.map