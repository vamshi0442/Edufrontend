import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
interface dropdownOptions {
  label: string;
  value: string;
}
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
  subheading:any=[];
  studentTestimonials:any=[];
  visible: boolean =true;
  quickContactForm!: FormGroup;
  states!: dropdownOptions[];
  courses!: dropdownOptions[];
  constructor(private httpClient: HttpClient,
    private apiService: ApiService) {
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
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
    
      // this.httpClient.get<any>("assets/response_1699881964735.json").subscribe((data)=>{
      this.apiService.getData().subscribe((data:any)=>{
      this.listMenuResponse = data.listMenuSubMenu;
      this.courselist =[];
      this.tempList =[];
      this.studentTestimonials=[];
      this.aboutPatashala =[];
      
      this.studentTestimonials = data.branches;
          this.listMenuResponse.forEach((element: { listMenuResponse: any; menu:any; menuUrl:any; responses: any; menu_Id :any; submenu_id:any ;content_Subheading:any }) => {
            if(element.submenu_id == 10 || element.submenu_id == 25){
              
              element.listMenuResponse.forEach((x: { responses: any; menu_Id :any })=>
              {
                if(x.menu_Id == element.menu_Id){
                  this.tempList.push({menu:element.menu, menuUrl:element.menuUrl, menu_Id: element.menu_Id, response: x.responses});
                  this.courselist =  this.tempList;
                  // this.courselist = JSON.stringify(this.tempList);
                 // this.subheading =x.
                }
                
              })
              
            }
            if(element.menu_Id==6){
              
              element.listMenuResponse.forEach((x:{responses: any;responses_Subheading:any;})=>{
                let tt = String(x.responses)
                this.aboutPatashala.push(tt.substring(0,620));
                this.subheading = x.responses_Subheading;
              })
            }
          });
          //this.studentTestimonials = data.branches;
        }
    );

    this.quickContactForm = new FormGroup({
      fullName: new FormControl(null, Validators.compose([Validators.required])),
      email: new FormControl(null, ),
      mobile: new FormControl(null, ),
      state: new FormControl(null, ),
      course: new FormControl(null,)
  });
  this.states = [
    {label: 'Andhra Pradesh', value: 'AndhraPradesh'},
    {label: 'Arunachal Pradesh', value: 'ArunachalPradesh'},
    {label: 'Assam', value: 'Assam'},
    {label: 'Bihar', value: 'Bihar'}
  ]

  this.courses  =[
    {label: 'CS', value:'CS'},
    {label: ' CA', value:' CA'},
    {label: 'CMA', value:'CMA'},
    {label: ' ACCA', value:' ACCA'},
    {label: 'CIMA', value:'CIMA'},
    {label: 'CMA(US)', value:'CMA(US)'}
  ]
  }
  onSubmit(){

  }
  }

