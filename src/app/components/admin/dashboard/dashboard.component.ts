import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.welcome();
  }

  welcome(){
    swal.fire(
      'Welcome',
      'Welcome to Admin dashboard',
      'success'
    );
  }

}
