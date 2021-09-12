import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})

export class HotelsComponent implements OnInit   {
  constructor(public router: ActivatedRoute) { }
  searchedCity:string;
  
 data=[];
 
 
 addCityData(ref){
   
   //values saved in hoteldetails
   let hotelDetails=ref.value;
   
   //push data from HotelDetails to data obj
   this.data.push(hotelDetails)
   
   //after submiting reset the input field
   ref.reset();
   
  }

  ngOnInit(): void {
  }
}