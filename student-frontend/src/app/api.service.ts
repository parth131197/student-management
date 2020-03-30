import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalUrl } from './global-urls';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllStudentList(){
    let url = GlobalUrl.BASE_URL + GlobalUrl.GET_ALL_STUDENTS;
    return this.http.get(url);
  }

  addStudent(studentData){
    let url = GlobalUrl.BASE_URL + GlobalUrl.ADD_STUDENT;
    return this.http.post(url, studentData);
  }
  deleteStudent(rollno){
    let url = GlobalUrl.BASE_URL + GlobalUrl.DELETE_STUDENT.replace('{roll_no}',rollno);
    return this.http.delete(url);
  }
  getStudent(rollno){
    let url = GlobalUrl.BASE_URL + GlobalUrl.DELETE_STUDENT.replace('{roll_no}',rollno);
    return this.http.get(url);
  }

}
