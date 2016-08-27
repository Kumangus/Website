"use strict";
// Imports
var dashboard_route_1 = require('./dashboard/dashboard.route');
var team4talent_route_1 = require('./team4talent/team4talent.route');
var person_route_1 = require('./person/person.route');
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
].concat(dashboard_route_1.DashboardRoutes, team4talent_route_1.Team4TalentRoutes, person_route_1.PersonRoutes);
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map