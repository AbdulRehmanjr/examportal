import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Model/login';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api/';
  
  constructor(private httpClient: HttpClient) { }

  // generate token 

  public generateToken(login:Login){
    console.log("generating token");
    return this.httpClient.post(`${this.baseUrl}`+"generate-token", login,{ responseType: 'json' }, );
  }

  public loginUser(token:any) {
    localStorage.setItem('token', token);
    return true;
  }

  // is user logged in

  public isLoggedIn() {
      let token = this.getToken();
      if (token ==undefined || token == null || token == "") {
        return false;
      }

      return true;
  }

  // logout 

  public logout(){
    localStorage.removeItem('token');
    return true;
  }
  // get token 
  public getToken(){
    return localStorage.getItem('token');
  }
  //public getUser details => optional but not good for security

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }
  // get the user details
  public getUser(){
    
    let user = localStorage.getItem('user');

    
    if(user!=null){
      return JSON.parse(user);
    }else{
      this.logout();
      return null;
    }
    
  }
  // user role

  public getUserRole(){

    let user = this.getUser();

    return user.authorities[0].authority;
  }

  public currentUser(){
    return this.httpClient.get(`${this.baseUrl}current-user`);
  }
}
