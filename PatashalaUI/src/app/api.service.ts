import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, count } from 'rxjs';
import { ImageData } from '../image-data.model'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  GettheImagesData(arg0: number, folder: string) {
    throw new Error('Method not implemented.');
  }

  // Base url
  //prodbaseurl = 'https://localhost:44388/api/';
  prodbaseurl = 'https://patashalapi.azurewebsites.net/api/';
  testprodbaseurl = 'https://localhost:44388/api/';// 
  apiUrl = 'https://patashalapi.azurewebsites.net/api/GettheImages';
  bannerUrl = 'https://patashalapi.azurewebsites.net/api/GettheImages?eventType=Banner';
  BatchAnnouncement = 'https://patashalapi.azurewebsites.net/api/GettheImages?eventType=Batch_announcement';
  newApis = 'https://patashalapi.azurewebsites.net/api/';
  isUserAdmin(): boolean {
    const isAdmin = localStorage.getItem("isadmin");
    return isAdmin === 'true';
  }
  constructor(private httpClient: HttpClient) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'text/plain'
    }),
  };
  //  localStorage.setItem("loggedUserId", data.userId);
  //  localStorage.setItem("userroleId", data.role);
  public getData_bak() {
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient.get<any>(`${this.prodbaseurl}GetData`, this.httpOptions);
    // return this.httpClient.get<any>("assets/response_1699881964735.json");
    // return this.httpClient.get<any>(`${this.prodbaseurl}GetData`,this.httpOptions);
  }
  public PostEnquiryForm(formData: any): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient.post<any>(`${this.prodbaseurl}PostEnquiryForm`, formData, this.httpOptions);
  }
//// username:SureshM password:SureshM123
  public getData() {
    let userid = 0;
    let roleid = 0;
    let admin: boolean = false;
    if (localStorage.getItem("loggedUserId") != "0") {
      userid = Number(localStorage.getItem("loggedUserId"));
    }
    else {
      userid = 0;
    }
    if (localStorage.getItem("userroleId") != "0") {
      roleid = Number(localStorage.getItem("userroleId"));
    }
    else {
      roleid = 0
    }
    if (localStorage.getItem("isadmin") != "false") {
      admin = true;
    }
    else {
      admin = false;
    }
    let requestBody =
    {
      "userId": userid,
      "role": roleid,
      "isadmin": admin
    }
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient.post<any>(`${this.prodbaseurl}GetResponseData`, requestBody, this.httpOptions);
  }

  getFacultyImages(pageNumber: number, eventType: string): Observable<any> {
    const url = `${this.apiUrl}?pagenumber=${pageNumber}&eventType=${eventType}`;
    return this.httpClient.get<any>(url);
  }
  getOurteam() {
    const url = '${this.apiUrl}patshalagallery/Leadership?';
    console.log(url)
    return this.httpClient.get<any>(url);
  }
  public PostMenuResponses(input: any) {
    return this.httpClient.post<any>(`${this.prodbaseurl}PostMenuResponses`, input, this.httpOptions)
  }
  public PostMenu(input: any) {
    return this.httpClient.post<any>(`${this.prodbaseurl}PostMenu`, input, this.httpOptions);
  }
  public Login(input: any) {
    return this.httpClient.post<any>(`${this.prodbaseurl}GetLoggedInUser`, input, this.httpOptions);
  }
  public GetImages(): Observable<ImageData[]> {
    return this.httpClient.get<ImageData[]>(`${this.prodbaseurl}GettheImagesData`, this.httpOptions);
  }
  public NewGetbannerImages(): Observable<any> {
    const url = `${this.bannerUrl}`;
    return this.httpClient.get<any>(url);
  }
  public NewBatchannImage(): Observable<any> {
    const url = `${this.BatchAnnouncement}`;
    return this.httpClient.get<any>(url);
  }
  public getVideoList() {
    const url = `${this.newApis}GetVideoList`;
    return this.httpClient.get<any>(url);
  }
  public getExamNoties(){
    const url = `${this.newApis}GetZoomLinks`;
    return this.httpClient.get<any>(url)
  }
  public PostExamNoties(input: any) {
    return this.httpClient.post<any>(`${this.newApis}PostZoomLink`, input, this.httpOptions)
  }
}
