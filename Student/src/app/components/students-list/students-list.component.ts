import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
  MatDialogConfig,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddStudentComponent } from '../add-student/add-student.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [FormsModule,RouterLink,MatFormFieldModule,MatInputModule, MatIconModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent implements OnInit{
  students?: Student[];


  constructor(private studentService : StudentService, public router: Router, public dialog : MatDialog){
  
  }
  
    ngOnInit(): void {
     this.retrieveStudent();
    }
    retrieveStudent():void{
      this.studentService.getAll()
      .subscribe({
        next:(data)=>{
          this.students=data;
        },
        error:(e) => console.error(e)
      })
    }
    deletestudent(id: any): void{
      this.studentService.delete(id).subscribe({
        next: (res) => {
          window.location.reload();
        },
        error: (e) => console.error(e)
      })
    }
    openDialog(): void {
      const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%"
      const dialogRef = this.dialog.open(AddStudentComponent, 
        dialogConfig
      );
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.retrieveStudent();
      });
    }
  
  }
  