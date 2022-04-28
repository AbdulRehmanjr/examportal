import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/Model/user';
import { SignupuserService } from '../../services/signupuser.service';
import  swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private userService:SignupuserService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.SignupForm = this.formBuilder.group({
        firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
        lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
        username: new FormControl('',[Validators.required,Validators.minLength(6)]),
        password: new FormControl('',[Validators.required,Validators.minLength(8)]),
        email: new FormControl('',
        [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        phone: new FormControl('',Validators.required),
    });
  }
  get firstName():any {return this.SignupForm.get('firstName');}
  get lastName() :any{return this.SignupForm.get('lastName');}
  get username() :any{return this.SignupForm.get('username');}
  get password() :any{return this.SignupForm.get('password');}
  get email() :any{return this.SignupForm.get('email');}
  get phone() :any{return this.SignupForm.get('phone');}

  FormSubmit() {
    console.log("Handling the submit button");

    if (this.SignupForm.invalid) {
      this.SignupForm.markAllAsTouched();
      return;
    }

    let user = new User();
    user.firstName = this.SignupForm.controls['firstName'].value;
    user.lastName = this.SignupForm.controls['lastName'].value;
    user.username = this.SignupForm.controls['username'].value;
    user.email = this.SignupForm.controls['email'].value;
    user.phone = this.SignupForm.controls['phone'].value;
    user.password = this.SignupForm.controls['password'].value;

    // console.log(user);

    this.userService.signupUser(user).subscribe(
      data=>{
        console.log(data);
        swal.fire(
          'Success!',
          'User Created Successfully',
          'success'
        );
        // disappear after 3 seconds
        // this.snackbar.open("User registered successfully", "", {
        //   duration: 3000,
        // });
      },
      error =>{
        console.log(error);

       // if(error.message == "User already exists"){
        swal.fire(
          'Error!',
          'User already exists',
          'error'
        );
      //}
        // this.snackbar.open("User registration failed", "", {
        //   duration: 3000,
        // });
      }
    );
  }

}
