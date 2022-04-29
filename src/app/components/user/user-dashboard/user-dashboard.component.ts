import { Component, OnInit } from '@angular/core';
import  swal from 'sweetalert2';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    
  ) { }


  ngOnInit(): void {
    this.welcome();
  }

  welcome(){
    swal.fire(
      'Welcome',
      'Welcome to user dashboard',
      'success'
    );
  }
}
