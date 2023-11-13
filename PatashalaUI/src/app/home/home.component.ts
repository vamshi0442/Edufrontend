import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  listMenuResponse:any = [];
  aboutPatashala:any =[];
  courselist:any =[];
  tempList:any=[];
  studentTestimonials:any=[];
  constructor(private httpClient: HttpClient,
    private apiService: ApiService) {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit(): void {
    debugger;
    //this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
      this.apiService.getData().subscribe((data:any)=>{
      this.listMenuResponse = data.listMenuSubMenu;
      this.courselist =[];
      this.tempList =[];
      this.studentTestimonials=[];
      this.aboutPatashala =[];
      debugger;
      this.studentTestimonials = data.branches;
          this.listMenuResponse.forEach((element: { listMenuResponse: any; menu:any; menuUrl:any; responses: any; menu_Id :any; submenu_id:any }) => {
            if(element.submenu_id == 10 || element.submenu_id == 25){
              
              element.listMenuResponse.forEach((x: { responses: any; menu_Id :any })=>
              {
                if(x.menu_Id == element.menu_Id){
                  this.tempList.push({menu:element.menu, menuUrl:element.menuUrl, menu_Id: element.menu_Id, response: x.responses});
                 this.courselist =  this.tempList;
                  // this.courselist = JSON.stringify(this.tempList);
                }
                
              })
              
            }
            if(element.menu_Id==6){
              element.listMenuResponse.forEach((x:{responses: any;})=>{
                this.aboutPatashala.push(x.responses);
              })
            }
          });
          //this.studentTestimonials = data.branches;
        }
    );
  }
  }

