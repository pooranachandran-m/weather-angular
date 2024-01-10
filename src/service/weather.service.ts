import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Weather} from "../dto/weather";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   ROOT_URL='http://localhost:8080/weather';
  constructor(private http:HttpClient) { }

  httpOptions = {headers: new HttpHeaders({'content-type':'application-json'})}

  getWeather(city:string): Observable<Weather>{
    let url= this.ROOT_URL+'/city/'+city;

     return this.http.get<Weather>(url,this.httpOptions);
  }

  public getLocations():Observable<string[]>{
    let url= this.ROOT_URL+'/location';
    return this.http.get<string[]>(url,this.httpOptions);
  }
}
