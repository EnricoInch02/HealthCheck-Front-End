import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DottoriComponent } from './page/dottori/dottori.component';
import { PazientiComponent } from './page/pazienti/pazienti.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LandingComponent } from './page/landing/landing.component';
import { PatientDashboardComponent } from './page/patient-dashboard/patient-dashboard.component';
import { AllUserDashboardComponent } from './page/all-user-dashboard/all-user-dashboard.component';
import { AllTestDashboardComponent } from './page/all-test-dashboard/all-test-dashboard.component';
import { TypeTestDashboardComponent } from './page/type-test-dashboard/type-test-dashboard.component';
import { DoctorDashboardComponent } from './page/doctor-dashboard/doctor-dashboard.component';
import { HomeDashboardComponent } from './page/home-dashboard/home-dashboard.component';
import { UrineTestDashboardComponent } from './page/urine-test-dashboard/urine-test-dashboard.component';
import { ProfileComponent } from './page/profile/profile.component';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dottori', component: DottoriComponent },
      { path: 'pazienti', component: PazientiComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeDashboardComponent },
      { path: 'users', component: AllUserDashboardComponent },
      { path: 'tests', component: AllTestDashboardComponent },
      { path: 'doctors', component: DoctorDashboardComponent },
      { path: 'patient', component: PatientDashboardComponent },
      { path: 'BLOODTEST', component: TypeTestDashboardComponent },
      { path: 'URINETEST', component: UrineTestDashboardComponent },
      { path: 'Profile', component: HomeProfileComponent },
    ],
  },

  { path: '', redirectTo: 'landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
