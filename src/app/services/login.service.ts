import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }
  public loginUser(login:Login) {
    console.log("saving user to server");
    return this.httpClient.post(`${this.baseUrl}`+"login", login,{ responseType: 'json' }, );
  }
}
