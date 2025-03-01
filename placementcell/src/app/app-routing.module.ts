import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { AdminComponent } from './components/admin/admin/admin.component';
import { CompanyregistrationComponentComponent } from './components/registration/companyregistration-component/companyregistration-component.component';
import { StudentragistrationComponentComponent } from './components/registration/studentragistration-component/studentragistration-component.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { StudentComponent } from './components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { StudentNotificationComponent } from './components/student/student-notification/student-notification.component';

import { MyApplicationTrackingComponent } from './components/student/my-application-tracking/my-application-tracking.component';
import { LoginpageComponent } from './practice/loginpage/loginpage.component';
import { SidenavComponent } from './practice2/sidenav/sidenav.component';
import { DashboardComponent } from './practice2/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SHeaderComponent } from './components/student/s-layout/s-header/s-header.component';
import { SProfileComponent } from './components/student/s-profile/s-profile.component';
import { SAplicationComponent } from './components/student/s-aplication/s-aplication.component';
import { SBasicDetailsComponent } from './components/student/s-basic-details/s-basic-details.component';
import { SProfileEditComponent } from './components/student/s-profile-edit/s-profile-edit.component';
import { SJobSerchComponent } from './components/student/s-job-serch/s-job-serch.component';
import { SJoblistComponent } from './components/student/s-joblist/s-joblist.component';
import { CompanyComponent } from './components/company/company.component';
import { CDashboardComponent } from './components/company/c-dashboard/c-dashboard.component';
import { CJobpostComponent } from './components/company/c-jobpost/c-jobpost.component';
import { CStatusComponent } from './components/company/c-status/c-status.component';
import { CProfileComponent } from './components/company/c-profile/c-profile.component';
import { SStatusComponent } from './components/student/s-status/s-status.component';
import { SDashboardComponent } from './components/student/s-dashboard/s-dashboard.component';
import { SVacancyDetailsComponent } from './components/student/s-vacancy-details/s-vacancy-details.component';
import { CAddVacancyDetailsComponent } from './components/company/c-add-vacancy-details/c-add-vacancy-details.component';
import { AdminBodyComponent } from './components/admin/a-layout/admin-body/admin-body.component';
import { ADashboardComponent } from './components/admin/a-dashboard/a-dashboard.component';
import { CEditVacancyDetailsComponent } from './components/company/c-edit-vacancy-details/c-edit-vacancy-details.component';
import { CBasicDetailsComponent } from './components/company/c-basic-details/c-basic-details.component';
import { SBasicDetailsEditComponent } from './components/student/s-basic-details-edit/s-basic-details-edit.component';
import { SVacancyApplyComponent } from './components/student/s-vacancy-apply/s-vacancy-apply.component';
import { ASApplicationComponent } from './components/admin/a-s-application/a-s-application.component';
import { ASApplicationEditComponent } from './components/admin/a-s-application-edit/a-s-application-edit.component';
import { AddProjectComponent } from './components/prac3/add-project/add-project.component';
import { ForminputComponent } from './components/prac3/forminput/forminput.component';
import { FileuploadComponent } from './components/prac3/fileupload/fileupload.component';
import { SAcademicDetailsComponent } from './components/student/s-academic-details/s-academic-details.component';
import { ACVacancyListComponent } from './components/admin/a-c-vacancy-list/a-c-vacancy-list.component';
import { ACVacancyListActionComponent } from './components/admin/a-c-vacancy-list-action/a-c-vacancy-list-action.component';

 



const routes: Routes = [

  // for new sidebar 
  // {path:'', redirectTo: 'dashboard', pathMatch : 'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'abody', component:AdminBodyComponent},


 
  {path:'', component:HomeComponent},
  {path:'admin', component:AdminComponent,children:[
    {path:'company_registration', component:CompanyregistrationComponentComponent},
    {path:'a-dashboard', component:ADashboardComponent},
    {path:'s-application', component:ASApplicationComponent},
    {path:'s-application-edit', component:ASApplicationEditComponent},
    {path:'c-vacancylist', component:ACVacancyListComponent},
    {path:'a-c-vacancylist-action/:id', component:ACVacancyListActionComponent},
  ]},
 
  // {path:'student_registraion', component:StudentragistrationComponentComponent},
  


  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'addproduct', component:AddProjectComponent},
  {path:'forninput', component:ForminputComponent},
  {path:'fileupload', component:FileuploadComponent},
 
 
// header
 
  {path:'student', component:StudentComponent,children:[
    {path:'s-dashboard', component:SDashboardComponent},
    {path:'student_profile', component:StudentProfileComponent},
    {path:'student_notification', component:StudentNotificationComponent},
    {path:'s-joblist', component:SJoblistComponent},
    {path:'s-vacany-details', component:SVacancyDetailsComponent},
    {path:'s-vacancy-apply/:id', component:SVacancyApplyComponent},

    {path:'s-status/:id', component:SStatusComponent},
    {path:'s-basic-details', component:SAplicationComponent},
    {path:'s-acadmic-details', component:SAcademicDetailsComponent},
    {path:'s-basic-detailss', component:SBasicDetailsComponent},
    {path:'s-basic-details-edit/:id', component:SBasicDetailsEditComponent},
    {path:'s-basic-form', component:SBasicDetailsComponent},
    {path:'s-profile/:id', component:SProfileComponent},
    {path:'s-profile-edit/:id', component:SProfileEditComponent},
    {path:'student_registration', component:StudentragistrationComponentComponent},


    {path:'s-vacancy', component:SVacancyDetailsComponent},

  ]},
 


  // company
  {path:'company', component:CompanyComponent,children:[
    {path:'c-dashboard', component:CDashboardComponent},
    {path:'c-basic-details', component:CBasicDetailsComponent},
    {path:'c-Jobpost', component:CJobpostComponent},
    {path:'c-status', component:CStatusComponent},
    {path:'c-profile', component:CProfileComponent},
    {path:'c-add-vacancy', component:CAddVacancyDetailsComponent},
    {path:'c-edit-vacancy/:id', component:CEditVacancyDetailsComponent},
  
  ]},


  // practice 

 {path:'logpra', component:LoginpageComponent},
 {path:'s-header', component:SHeaderComponent},

 

 
  // {path:'userprofile', component:},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
