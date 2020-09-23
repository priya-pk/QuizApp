import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  getQuest(){
    return this.http.get<any>('http://localhost:3000/api/questions');
  }

  // getQuest(){
  //   return this.http.get<any>('assets/questions.json');
  // }
}
