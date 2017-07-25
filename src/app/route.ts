import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceManagementComponent } from './device-management/device-management.component';

export const routes: Routes = [
 { path: '', component: AppComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'device-management', component: DeviceManagementComponent }
];