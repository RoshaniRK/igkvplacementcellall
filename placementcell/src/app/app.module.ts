import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { StudentComponent } from './components/student/student.component';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';
import {MatListModule} from '@angular/material/list';
import {MatCommonModule, MatOptionModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import { CompanyregistrationComponentComponent } from './components/registration/companyregistration-component/companyregistration-component.component';
import { StudentragistrationComponentComponent } from './components/registration/studentragistration-component/studentragistration-component.component';
import { JoblistComponent } from './components/joblist/joblist.component';

import { HttpClientModule } from '@angular/common/http'; 


import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentNotificationComponent } from './components/student/student-notification/student-notification.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { MyApplicationTrackingComponent } from './components/student/my-application-tracking/my-application-tracking.component';

import { StudentHeaderComponent } from './components/student/student-header/student-header.component';
import { LoginpageComponent } from './practice/loginpage/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';



import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { BodyComponent } from './practice2/body/body.component';
import { SidenavComponent } from './practice2/sidenav/sidenav.component';
import { DashboardComponent } from './practice2/dashboard/dashboard.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
 
// 10 5 2024  for install
import {MatStepperModule} from '@angular/material/stepper';
import { CompanyComponent } from './components/company/company.component';

// 05 5 2024 for install 
 
import { MatExpansionModule } from '@angular/material/expansion';
import { StudentSidebarComponent } from './components/student/layout/student-sidebar/student-sidebar.component';
import { SDashboardComponent } from './components/student/s-dashboard/s-dashboard.component';
import { SMainComponent } from './components/student/s-main/s-main.component';
import { SAplicationComponent } from './components/student/s-aplication/s-aplication.component';
import { SJobSerchComponent } from './components/student/s-job-serch/s-job-serch.component';
import { SBasicDetailsComponent } from './components/student/s-basic-details/s-basic-details.component';
import { SHeaderComponent } from './components/student/s-layout/s-header/s-header.component';
import { SSidebarComponent } from './components/student/s-layout/s-sidebar/s-sidebar.component';
import { SProfileComponent } from './components/student/s-profile/s-profile.component';

import { SProfileEditComponent } from './components/student/s-profile-edit/s-profile-edit.component';
import { SJoblistComponent } from './components/student/s-joblist/s-joblist.component';
import { CMainComponent } from './components/company/c-main/c-main.component';

import { CHeaderComponent } from './components/company/c-layout/c-header/c-header.component';
import { CSidebarComponent } from './components/company/c-layout/c-sidebar/c-sidebar.component';
import { CDashboardComponent } from './components/company/c-dashboard/c-dashboard.component';
import { CJobpostComponent } from './components/company/c-jobpost/c-jobpost.component';
import { CStatusComponent } from './components/company/c-status/c-status.component';
import { CProfileComponent } from './components/company/c-profile/c-profile.component';
import { SStatusComponent } from './components/student/s-status/s-status.component';
import { SVacancyDetailsComponent } from './components/student/s-vacancy-details/s-vacancy-details.component';
import { CAddVacancyDetailsComponent } from './components/company/c-add-vacancy-details/c-add-vacancy-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AdminSidebarComponent } from './components/admin/a-layout/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin/a-layout/admin-header/admin-header.component';
import { AdminBodyComponent } from './components/admin/a-layout/admin-body/admin-body.component';
import { ADashboardComponent } from './components/admin/a-dashboard/a-dashboard.component';
import { CEditVacancyDetailsComponent } from './components/company/c-edit-vacancy-details/c-edit-vacancy-details.component';
import { CBasicDetailsComponent } from './components/company/c-basic-details/c-basic-details.component';
import { SBasicDetailsEditComponent } from './components/student/s-basic-details-edit/s-basic-details-edit.component';
import { SVacancyApplyComponent } from './components/student/s-vacancy-apply/s-vacancy-apply.component';

import { ASApplicationComponent } from './components/admin/a-s-application/a-s-application.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ASApplicationEditComponent } from './components/admin/a-s-application-edit/a-s-application-edit.component';
import { AddProjectComponent } from './components/prac3/add-project/add-project.component';
import { ForminputComponent } from './components/prac3/forminput/forminput.component';
import { FileuploadComponent } from './components/prac3/fileupload/fileupload.component';
 
import {MatDialogModule} from '@angular/material/dialog';
import { SAcademicDetailsComponent } from './components/student/s-academic-details/s-academic-details.component';
import { ACVacancyListComponent } from './components/admin/a-c-vacancy-list/a-c-vacancy-list.component';

import { ACVacancyListActionComponent } from './components/admin/a-c-vacancy-list-action/a-c-vacancy-list-action.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StudentComponent,
    MenubarComponent,
    HomeComponent,
    CompanyregistrationComponentComponent,
    StudentragistrationComponentComponent,
    JoblistComponent,
    LoginComponent,
    SignupComponent,

    StudentNotificationComponent,
    StudentProfileComponent,
    MyApplicationTrackingComponent,
    StudentHeaderComponent,
    LoginpageComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    AdminProfileComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
    CompanyComponent,
    StudentSidebarComponent,
    SDashboardComponent,
    SMainComponent,
    SAplicationComponent,
    SJobSerchComponent,
    SBasicDetailsComponent,
    SHeaderComponent,
    SSidebarComponent,
    SProfileComponent,

    SProfileEditComponent,
      SJoblistComponent,
      CMainComponent,
      CHeaderComponent,
      CSidebarComponent,
      CDashboardComponent,
      CJobpostComponent,
      CStatusComponent,
      CProfileComponent,
      SStatusComponent,
      SVacancyDetailsComponent,
      CAddVacancyDetailsComponent,
      ADashboardComponent,
      CEditVacancyDetailsComponent,
      CBasicDetailsComponent,
      SBasicDetailsEditComponent,
      SVacancyApplyComponent,
      ASApplicationComponent,
      ASApplicationEditComponent,
      AddProjectComponent,
      ForminputComponent,
      FileuploadComponent,
      SAcademicDetailsComponent,
      ACVacancyListComponent,
      ACVacancyListActionComponent,

     
    
   
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCommonModule,
    MatBadgeModule,
    MatCardModule,

    MatInputModule,
    ReactiveFormsModule,
 

    FormsModule,
    HttpClientModule,

    MatExpansionModule,
    MatStepperModule,
    MatPaginatorModule,
    MatTableModule,

    NgxPaginationModule,
    MatProgressBarModule,
    MatOptionModule,
    MatDialogModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
