import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  listMenuResponse:any = [];
  courselist:any =[];
  tempList:any=[];
  studentTestimonials:any=[];
  constructor(private httpClient: HttpClient) {
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
    this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
      this.listMenuResponse = data;
      this.courselist =[];
      this.tempList =[];
      this.studentTestimonials=[];
          this.listMenuResponse.dynamicmenu.forEach((element: { listMenuResponse: any; menu:any; menuUrl:any; responses: any; menu_Id :any; submenu_id:any }) => {
            if(element.submenu_id == 10 || element.submenu_id == 25){
              
              element.listMenuResponse.forEach((x: { responses: any; menu_Id :any })=>
              {
                if(x.menu_Id == element.menu_Id){
                  this.tempList.push({menu:element.menu, menuUrl:element.menuUrl, menu_Id: element.menu_Id, response: x.responses});
                 this.courselist =  this.tempList;
                  // this.courselist = JSON.stringify(this.tempList);
                  console.log("kit" + this.courselist);
                }
                
              })
              
            }
          });
          this.studentTestimonials = data.branches;
        }
    );
  }
  }

