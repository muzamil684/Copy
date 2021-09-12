import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bus } from '../models/bus.model';
import { SelectBusService } from '../services/selectBus.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bus-search-result',
  templateUrl: './bus-search-result.component.html',
  styleUrls: ['./bus-search-result.component.css']
})

export class BusSearchResultComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  buses:Bus[]=[];
  modalRef: BsModalRef;
  route:any;
    constructor(
      private BusService:SelectBusService,
      private modalService: BsModalService,
      private router:Router
    ) { }
  
    ngOnInit() {
      this.route=JSON.parse(localStorage.getItem("route"));
      if(!this.route) {
        this.router.navigate([''])
      }
     this.subscription= this.BusService.castId.subscribe(
        res=>this.getAllBus(res)
      )
    }
  
    getAllBus(res){
      let bus=new Object();
      this.BusService.getBus(res)
      .subscribe(
        res=>{
          for(let key in res){
            bus=res[key];
            bus['$key']=key;
           
   
         this.buses.push(bus as Bus);
     
  
          }
        }
      )
  
    }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    // let journey={
    //   route:this.route,
    //   bus_info:bus,
    //   seats:
    // }
    
  }
  closeModal (){
    this.modalRef.hide();
  }
  
  }
  