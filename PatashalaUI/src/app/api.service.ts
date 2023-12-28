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

  public getData_new(){
    let requestBody =
      {
        "userId": 0,
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "username": "string",
        "role": 0,
        "isactive": true,
        "passwordhash": "string",
        "ipaddress": "string",
        "userverified": "string",
        "usertoken": "string",
        "tokenstartdate": "2023-12-28T12:30:31.641Z",
        "tokenenddate": "2023-12-28T12:30:31.641Z",
        "isadmin": true
      }
    
    const headers= new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient.post<any>(`${this.prodbaseurl}GetResponseData`, requestBody, this.httpOptions);
  }

  public PostMenuResponses(input:any){
    return this.httpClient.post<any>(`${this.prodbaseurl}PostMenuResponses`, input, this.httpOptions)
  }
  public PostMenu(input:any){
    return this.httpClient.post<any>(`${this.prodbaseurl}PostMenu`, input, this.httpOptions);
  }
}
