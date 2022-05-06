import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isloggedIn = false;
  user:any = null;
  constructor(
    public loginService: LoginService
  
  ) { }
  ngOnInit(): void {
    
  }
  public logout(){
    this.loginService.logout();
  }

}
