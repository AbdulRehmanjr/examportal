import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any = null;
  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.currentUser().subscribe(
      (user:any)=>{
        this.user = user;
      },
      error=>{
        console.log(error);
        
      }
    );
  }

}
