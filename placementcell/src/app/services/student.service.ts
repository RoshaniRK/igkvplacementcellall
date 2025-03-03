import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private apiUrl = 'http://localhost:3000';  

  studentDetail_Get_Url: string = 'http://localhost:3000/student/student_List';

  studentDetail_Post_Url: string = 'http://localhost:3000/student/registration';
  

  constructor(private http: HttpClient) {}

  getStudentDetails() {
    return this.http.get(this.studentDetail_Get_Url);
  }

  postStudentDetails(data: any) {
    return this.http.post(this.studentDetail_Post_Url, data);  
  }


  getProfiledata(eid: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/search`, { eid });
  }


  // this api is get details from eid with combine table student detils or vacancy details
  getstudentdetails(eid: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/getstudentdetails`, { eid });
  }


  //add fot get data from basice details
  getBasicDetails(eid: any){
    return this.http.post<any>(`${this.apiUrl}/student/getbasicdetails`, { eid });
  }
  // end

//add fot get data from basice details
  postBasicDetails(data: any) {
    // return this.http.post(this.studentDetail_Post_Url, data);  
    return this.http.post<any>(`${this.apiUrl}/student/postbasicdetails`, data);
  }
// end


getVacancyApplyStudentDetails(){
  return this.http.get(`${this.apiUrl}/student/getVacancyApplyStudentDetails`);
}
VacancyApplicationStudentDetail(eid: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/student/VacancyApplicationStudentDetail`, { eid });
}







// add by anil this api for master table
getGender(){
  return this.http.get(`${this.apiUrl}/student/getGender`);
}






  


}
