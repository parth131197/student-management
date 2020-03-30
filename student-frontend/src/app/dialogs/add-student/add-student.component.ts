import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  addStudentForm = new FormGroup({
    roll_no: new FormControl(null,Validators.required),
    name: new FormControl('',[Validators.required]),
    age: new FormControl(null,[Validators.required]),
    section: new FormControl('',[Validators.required])
  });
  get roll_no(): any {return this.addStudentForm.get('roll_no')};
  get name(): any {return this.addStudentForm.get('name')};
  get age(): any {return this.addStudentForm.get('age')};
  get section(): any {return this.addStudentForm.get('section')};

  constructor(private apiService:ApiService, private dialogRef: MatDialogRef<AddStudentComponent>) { }
 
  ngOnInit() {
  }

  addStudent(){
    if(this.addStudentForm.valid){
      this.apiService.addStudent(this.addStudentForm.value)
      .subscribe((response)=>{
        console.log("Student added", response);
        this.dialogRef.close();
      },(error)=>{
        console.log("Error in adding student:",error);
      })
    }
  }
}
