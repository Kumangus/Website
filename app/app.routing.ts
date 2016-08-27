// Imports
import { DashboardRoutes } from './dashboard/dashboard.route';
import { Team4TalentRoutes } from './team4talent/team4talent.route';
import { PersonRoutes } from './person/person.route';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...Team4TalentRoutes,
  ...PersonRoutes
];

export const Routing = RouterModule.forRoot(appRoutes);