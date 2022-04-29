import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class SignupuserService {
  private baseUrl = 'http://localhost:8080/api/user/';
  constructor(private httpClient: HttpClient) { }

  public signupUser(user:User) {
    console.log("saving user to server");
    return this.httpClient.post(`${this.baseUrl}`+"register", user,{responseType: 'text' }, );
  }
}
