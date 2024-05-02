import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { elementAt } from 'rxjs';
import { MessageService } from "primeng/api"; 

@Component({
  selector: 'app-view-enquiries',
  templateUrl: './view-enquiries.component.html',
  styleUrls: ['./view-enquiries.component.css']
})
export class ViewEnquiriesComponent  {
  listEnquiryform: any = [];
  allSubItems: any=[];
  sublist:any=[];
  state : any;
  name:any;
  email:any;
  course:any;
  mobile:any;
  submenu: any = "submenu";
  mainmenu:any = "mainmenu";
  input:any;
  constructor(private httpClient: HttpClient,
    private apiService: ApiService,
    private router: Router,
    private messageService:MessageService) {
  }
  ngOnInit(): void {
    this.apiService.getData().subscribe((data:any)=>{
    //  console.log("data:" +  JSON.stringify(data))
      this.listEnquiryform=[];
      this.allSubItems =[];
      // this.allMenuItems = data.listMenuSubMenu;
      data.listEnquiryForm.forEach((element: { name: any; email: any; mobile: any; course: any; state:any;}) => {
        this.listEnquiryform.push({
         "name":element.name,
         "mobile":element.mobile,
         "email":element.email,
         "state":element.state,
         "course":element.course
        })
      });
 
    }
    
    )}
  }