import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent }          from './dashboard.component';

// Route Configuration
export const DashboardRoutes: RouterConfig = [
  { path: 'dashboard', component: DashboardComponent },
];