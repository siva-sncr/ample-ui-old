import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
 { path: '', component: LoginComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'device-management', component: DeviceManagementComponent },
 { path: 'map', component: MapComponent }
];