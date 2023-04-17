
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private http:HttpClient) { }

getmonedas(){

  return this.http.get("https://api.vatcomply.com/rates")
}

getbase(base:any){
  return this.http.get(`https://api.vatcomply.com/rates?base=${base}`)
}
}
