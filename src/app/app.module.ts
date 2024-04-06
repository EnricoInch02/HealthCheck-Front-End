import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DottoriComponent } from './page/dottori/dottori.component';
import { PazientiComponent } from './page/pazienti/pazienti.component';
import { LoginComponent } from './page/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { OurDoctorImageComponent } from './components/our-doctor-image/our-doctor-image.component';
import { OurDoctorCardsComponent } from './components/our-doctor-cards/our-doctor-cards.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponent } from './page/register/register.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingComponent } from './page/landing/landing.component';
import { MatTreeModule } from '@angular/material/tree';
import { ImmaginehomeComponent } from './components/immaginehome/immaginehome.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Immaginehome2Component } from './components/immaginehome2/immaginehome2.component';
import { Immaginehome3Component } from './components/immaginehome3/immaginehome3.component';
import { PatientDashboardComponent } from './page/patient-dashboard/patient-dashboard.component';
import { AllPatientComponent } from './components/all-patient/all-patient.component';
import { AllUserDashboardComponent } from './page/all-user-dashboard/all-user-dashboard.component';
import { HomeDashboardComponent } from './page/home-dashboard/home-dashboard.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DoctorDashboardComponent } from './page/doctor-dashboard/doctor-dashboard.component';
import { AllDoctorComponent } from './components/all-doctor/all-doctor.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RegistryFormComponent } from './components/registry-form/registry-form.component';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { FullUserFormComponent } from './components/full-user-form/full-user-form.component';
import { TableTestComponent } from './components/table-test/table-test.component';
import { AllTestDashboardComponent } from './page/all-test-dashboard/all-test-dashboard.component';
import { TypeTestDashboardComponent } from './page/type-test-dashboard/type-test-dashboard.component';
import { PazientihomeComponent } from './components/pazientihome/pazientihome.component';
import { CardPazientiComponent } from './components/card-pazienti/card-pazienti.component';
import { DoctorDetailComponent } from './components/doctor-detail/doctor-detail.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { UrineTestDashboardComponent } from './page/urine-test-dashboard/urine-test-dashboard.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FullTestFormComponent } from './components/full-test-form/full-test-form.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { BloodtestFormComponent } from './components/bloodtest-form/bloodtest-form.component';
import { UrinetestFormComponent } from './components/urinetest-form/urinetest-form.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { ChartModule } from 'primeng/chart';
import { ProfileComponent } from './page/profile/profile.component';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { ViewPdfComponent } from './components/view-pdf/view-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileUploadModule } from 'primeng/fileupload';
import { FooterComponent } from './components/footer/footer.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { TooltipModule } from 'primeng/tooltip';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { TabViewModule } from 'primeng/tabview';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ViewTestComponent } from './components/view-test/view-test.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DottoriComponent,
    PazientiComponent,
    LoginComponent,
    LoginFormComponent,
    OurDoctorImageComponent,
    OurDoctorCardsComponent,
    RegisterFormComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    SidebarComponent,
    LandingComponent,
    RegisterFormComponent,
    ImmaginehomeComponent,
    Immaginehome2Component,
    Immaginehome3Component,
    AllUserDashboardComponent,
    HomeDashboardComponent,
    TableComponent,
    UserFormComponent,
    RegistryFormComponent,
    FullUserFormComponent,
    TableTestComponent,
    AllTestDashboardComponent,
    TypeTestDashboardComponent,
    DoctorDashboardComponent,
    AllDoctorComponent,
    DoctorDetailComponent,
    PazientihomeComponent,
    CardPazientiComponent,
    PatientDashboardComponent,
    AllPatientComponent,
    PatientDetailComponent,
    UrineTestDashboardComponent,
    UserDetailComponent,
    FullTestFormComponent,
    TestFormComponent,
    BloodtestFormComponent,
    UrinetestFormComponent,
    ChartPieComponent,
    ProfileComponent,
    HomeProfileComponent,
    ViewPdfComponent,
    FooterComponent,
    EmptyComponent,
    ChartLineComponent,
    ResetPasswordComponent,
    ResetPasswordFormComponent,
    ViewTestComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTreeModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    ButtonModule,
    TableModule,
    TagModule,
    RatingModule,
    PaginatorModule,
    BreadcrumbModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    PasswordModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    MultiSelectModule,
    ChartModule,
    PdfViewerModule,
    FileUploadModule,
    TooltipModule,
    TabMenuModule,
    BadgeModule,
    TabViewModule,
    FloatLabelModule,
    

  ],
  
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
