import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userObj;


  constructor() { }

  ngOnInit(): void {
    this.userObj=JSON.parse(localStorage.getItem("UserObj"))

  }

}
