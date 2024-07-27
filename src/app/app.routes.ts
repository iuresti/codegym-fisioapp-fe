import {Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {LayoutComponent} from "./component/layout/layout.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {PatientsComponent} from "./component/patients/patients.component";
import {AppointmentsComponent} from "./component/appointments/appointments.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {TherapiesComponent} from "./component/therapies/therapies.component";
import {sessionGuard} from "./component/session.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'patients',
        component: PatientsComponent
      },
      {
        path: 'appointments',
        component: AppointmentsComponent
      },
      {
        path: 'doctors',
        component: DoctorsComponent
      },
      {
        path: 'therapies',
        component: TherapiesComponent
      }
    ],
    canActivate: [sessionGuard]
  }

];
