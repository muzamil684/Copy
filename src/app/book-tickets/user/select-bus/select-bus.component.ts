import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Journey_Route } from '../models/route.model';
import { SelectBusService } from '../services/selectBus.service';

@Component({
  selector: 'app-select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.css']
})

export class SelectBusComponent implements OnInit {
  // ={
  //   1109001:'comilla',
  //   1109002:'Chittagong',
  //   1109003:'Sylet',
  //   1109004:'Barisal'
  // }
  
  pnumber=1;
  
  place:Place[]=[];
  
    constructor(
      private BusService:SelectBusService,
      private router:Router
    ) {
     this.place[0]=new Place()
     }
  
    ngOnInit() {
   
    }
  
  
  
    SearchBus(form: NgForm) {
      let leaving_form = form.value.leaving_form;
      let destination;
     
    
      this.place.filter(iteam=>{
        if(iteam.key==form.value.going_to){
          destination=iteam.value
        }
      })
  
      let date = form.value.depart_date;
      let route:Journey_Route = {
        leaving_form: leaving_form,
        going_to: destination,
        date:date
      }
      localStorage.setItem("route", JSON.stringify(route))
      let routeId = form.value.going_to;
      this.BusService.getRoueId(routeId);
      this.router.navigate(['search']);
    }
  
    leave(e){
   
      let leavingfrom=e.target.value;
      console.log(leavingfrom)
      if(leavingfrom=='Hyderabad'){
        this.place= [
          {key:'1109002', value:'Bangalore'} ,
          {key:'1109004', value:'Kolkata'} ,
          {key:'1109005', value:'Chennai'},

   
        ]
    }
    else if(leavingfrom=='Chennai'){
      this.place= [
        {key:'2209002', value:'Bangalore'} ,
        {key:'2209001', value:'Hyderabad'} ,
        {key:'2209003', value:'Rajasthan'} ,
       
  
      ]
    }
    else if(leavingfrom=='Bangalore'){
      this.place= [
        {key:'3309003', value:'Mumbai'} ,
        {key:'3309001', value:'Hyderabad'} ,
        {key:'3309002', value:'Delhi'} ,
     
      ]
    }
  
  }
  
  
  }
  export class Place {
    key:string;
    value:string;
  }