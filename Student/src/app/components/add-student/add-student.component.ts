import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [RouterLink, MatDialogModule, MatFormFieldModule, CommonModule, FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student : Student = {
    id:0,
    studentName: '',
    courseName: '',
    studentId:0,
    batchId:'',
    round:'',
  }

  constructor(private srv : StudentService,  private dialogRef: MatDialogRef<AddStudentComponent> ){}
 savestudent(): void{
  console.log(this.student)
  this.srv.create(this.student)
          .subscribe({
            next:(data)=>{
              console.log(data)
              this.dialogRef.close();
            },
             error:(e)=>{
              console.log(e)
             } 
          })
 }
}
