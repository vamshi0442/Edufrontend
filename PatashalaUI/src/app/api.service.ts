import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // Base url
 baseurl = 'https://localhost:7269/api/';
 constructor(private httpClient: HttpClient) {}
 // Http Headers
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'accept':'text/plain'
   }),
 };

  public getData(){
    const headers= new HttpHeaders().set('content-type', 'application/json')
   // return this.httpClient.get<any>(`${this.baseurl}PatashalaResponses`,this.httpOptions);
   return this.httpClient.get<any>("assets/response_1699881964735.json");
}
}
