import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Login } from 'src/app/Model/login';
import { LoginService } from '../../services/login.service';
import  swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
  }
 get username():any {return this.LoginForm.get('username');}
  get password() :any{return this.LoginForm.get('password');}

  // form submission
  OnSubmit(){
    console.log("Handling the submit button=> login");


    if (this.LoginForm.invalid) {
      this.LoginForm.markAllAsTouched();
      return;
    }

      let login = new Login();
      login.username = this.LoginForm.controls['username'].value;
      login.password = this.LoginForm.controls['password'].value;

      // checking blank 
      if(login.username.trim() == ""){

        swal.fire(
          'Error',
          'Username cannot be blank',
          'error'
        );
          return;
      }
      
      console.log("login=>"+login.username+" "+login.password);
      //  api service call
      this.loginService.generateToken(login).subscribe(
        (data:any)=>{
          console.log("login successfull");
          console.log(data);
          // login...
          this.loginService.loginUser(data.token);
          this.loginService.currentUser().subscribe(
            (data:any)=>{
             // this.loginService.setUser(data);
              console.log(data);
              // redirectin according to role
              this.redirection(data);
              
            }
          );
        },
        error=>{
          console.log("login failed");
          console.log(error);
          swal.fire(
            'Login Failed',
            'Please enter valid username and password',
            'error'
          );
        } 
      );
      
  }
  private redirection(data:any){
    const role = this.loginService.getUserRole();
    if( role== "ADMIN"){
      // redirect to admin dashboard
      this.router.navigate(['/admin']);
    }else if(role == "USER"){
      // user dashboard
      this.router.navigate(['/user']);
    }
    else{
      this.loginService.logout();
      location.reload();
    }
  }
}
