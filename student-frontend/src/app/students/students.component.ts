import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { AddStudentComponent } from '../dialogs/add-student/add-student.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  
  studentsList = [];
  constructor(private dialog: MatDialog, private sharedService: SharedService, private apiService: ApiService) {
    this.getAllStudents();
  }

  ngOnInit() {
    // this.sharedService.setShowLoaderStatus(true);
    // setTimeout(()=>{
    //   this.sharedService.setShowLoaderStatus(false);
    // },4000);
  }

  addNewStudent(){
    const dialogRef = this.dialog.open(AddStudentComponent, {width:'45%',minWidth:'320px'});
    dialogRef.afterClosed().subscribe((res)=>{
      this.getAllStudents();
    });
  }

  getAllStudents(){
    this.apiService.getAllStudentList()
      .subscribe((response:any)=>{
        console.log("Students List", response);
        this.studentsList = response.result
      },(error)=>{
        console.log("Error studentList:",error);
      });
  }
  deleteStudent(rollno){
    this.sharedService.setShowLoaderStatus(true);
    this.apiService.deleteStudent(rollno)
      .subscribe((response)=>{
        console.log("Student deleted:",response);
        let index = this.studentsList.findIndex((student)=> student.rollno == rollno);
        if(index != -1){
          this.studentsList.splice(index, 1);
        }
        this.sharedService.setShowLoaderStatus(false);
      },(error)=>{
        console.log("Error in deleting student:",error);
        this.sharedService.setShowLoaderStatus(false);
      })
  }
}
