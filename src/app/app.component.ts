import { Component } from '@angular/core';
import { UserService } from './user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelBooking';

  constructor(public us:UserService,private router:Router){}

  userLogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
    this.router.navigateByUrl("login")
  }
}
