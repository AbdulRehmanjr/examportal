import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from 'src/app/Model/login';
import { LoginService } from '../../services/login.service';
import  swal from 'sweetalert2';

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
    private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
  }
 get username():any {return this.LoginForm.get('username');}
  get password() :any{return this.LoginForm.get('password');}
  OnSubmit(){
    console.log("Handling the submit button=> login");

    if (this.LoginForm.invalid) {
      this.LoginForm.markAllAsTouched();
      return;
    }
      let login = new Login();
      login.username = this.LoginForm.controls['username'].value;
      login.password = this.LoginForm.controls['password'].value;
      //  api service call
      this.loginService.loginUser(login).subscribe(
        data=>{
          console.log("login successfull");
        },
        error=>{
          console.log("login failed");
          swal.fire(
            'Login Failed',
            'Please enter valid username and password',
            'error'
          );
        }
        
      );
  }
}
