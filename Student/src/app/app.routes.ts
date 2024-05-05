import { Routes } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';


export const routes: Routes = [
    {path:'', redirectTo:'students', pathMatch:'full'},
    {path:'students', component: StudentsListComponent},
    {path:'student', component: AddStudentComponent},
    {path:'students/:id', component: StudentDetailComponent}
];
