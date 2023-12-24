import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // Base url
 //testbaseurl = 'https://localhost:44388/api/';
  prodbaseurl ='https://patashalapi.azurewebsites.net/api/'; 
  testbaseurl= 'https://localhost:44388/api/';// 
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
     return this.httpClient.get<any>(`${this.prodbaseurl}GetData`,this.httpOptions);
   // return this.httpClient.get<any>("assets/response_1699881964735.json");
   // return this.httpClient.get<any>(`${this.prodbaseurl}GetData`,this.httpOptions);

}
public PostEnquiryForm(formData:any) : Observable<any> {
  const headers= new HttpHeaders().set('content-type', 'application/json')
   return this.httpClient.post<any>(`${this.prodbaseurl}PostEnquiryForm`,formData,this.httpOptions);

}
}
