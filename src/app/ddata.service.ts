import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { m_hotels } from './MODELS/hotels.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DdataService {

  //inject http client
  constructor(private hc:HttpClient) { }


  getHotels():Observable<m_hotels[]>{
                              //json-server URL
    return this.hc.get<m_hotels[]>('http://localhost:3000/hotels')
  }

  getHotelsById(id):Observable<m_hotels>{
    return this.hc.get<m_hotels>('http://localhost:3000/hotels/'+id)
  }

  
}