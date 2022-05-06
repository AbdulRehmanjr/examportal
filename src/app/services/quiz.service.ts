import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:8080/api/quiz';
  constructor(private http:HttpClient) { }

  getQuizzes():Observable<any>{
    return this.http.get(`${this.baseUrl}/all`);
  }
}
