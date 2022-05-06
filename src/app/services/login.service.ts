import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Model/login';

import {  Observable } from 'rxjs';
import { User } from '../Model/user';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient,
    private router: Router) { }


    OnInit(){
       
    }
  // generate token 

  public generateToken(login:Login){
    console.log("generating token");
    return this.httpClient.post(`${this.baseUrl}`+"generate-token", login,{ responseType: 'json' }, );
  }

  public loginUser(token:any) {
    
    if(token!=null){
      sessionStorage.setItem('token',token);
      return true;
    }
    
    return false;
  }

  // is user logged in

  public isLoggedIn() {
      let token = this.getToken();
      if (token ==undefined || token == null || token == "") {
        console.log("token is null");
        return false;
      }

      return true;
  }

  // logout 

  public logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
    return true;
  }
  // get token 
  public getToken(){
    return sessionStorage.getItem('token');
  }
  //public getUser details => optional but not good for security
  
  public setUser(user:any){
    let  cu = new User();
    console.log("user in set user",user);
    cu.username = user.username;
    cu.authority = user.authorities[0].authority;
    sessionStorage.setItem('user',JSON.stringify(cu));
  }
  // get the user details
 public getUser(){
    
    let user = JSON.parse(sessionStorage.getItem('user'));
    console.log("getUser",user);
    if(user!=null){
      return user;
    }else{
      // this.logout();
      return null;
    }
    
 }
  // user role
  public getUserRole(){
      let user = this.getUser();
    console.log("user",user);
      return user.authority;
  }
  
  public currentUser():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}current-user`);
  }
}
