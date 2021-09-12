import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DdataService } from '../ddata.service';
import { m_hotels } from '../MODELS/hotels.model';

@Component({
  selector: 'app-bengaluru',
  templateUrl: './bengaluru.component.html',
  styleUrls: ['./bengaluru.component.css']
})



export class BengaluruComponent implements OnInit {

  myHotels:m_hotels[];
  
  


  constructor(private dsObj:DdataService,private router:Router) { }

  ngOnInit(): void {

   this.dsObj.getHotels().subscribe(
      hotelData=>{
        this.myHotels=hotelData;
        console.log(this.myHotels);
      },
      err=>{
        console.log("error in getting hotelData",err);
      }
    )
  }

  onSelectId(id){
this.router.navigateByUrl('hotels/'+id)
  }

}