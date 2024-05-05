import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl ='https://localhost:7115/api/StudentInfoes'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Student[]>{
    return this.http.get<Student[]>(baseUrl);
  }
  get(id:any):Observable<Student[]>{
    return this.http.get<Student[]>(`${baseUrl}/${id}`);
  }
  create(Student:any):Observable<any>{
    return this.http.post(baseUrl, Student);
  }
  update(id: any, Student: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}/${id}`, Student)
  }
  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
