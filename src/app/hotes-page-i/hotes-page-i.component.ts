import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DdataService } from '../ddata.service';
import { m_hotels } from '../MODELS/hotels.model';

@Component({
  selector: 'app-hotes-page-i',
  templateUrl: './hotes-page-i.component.html',
  styleUrls: ['./hotes-page-i.component.css']
})

export class HotelsPageIComponent implements OnInit {



  hotelsPageObj:m_hotels;
  
  //to read id from url we use activated route 
    constructor(private ar:ActivatedRoute,private dds:DdataService, private router:Router) { }
  
    ngOnInit(): void {
     let id=this.ar.snapshot.params.id;
  console.log(id);
  
     //get data from m_hotels using id
     this.dds.getHotelsById(id).subscribe(
       obj=>{
        
        this.hotelsPageObj=obj;
       },
       err=>{
         console.log("error in reading hotelsPage",err);
       }
     )
  
   
  
  
    }
    
    
  
  }