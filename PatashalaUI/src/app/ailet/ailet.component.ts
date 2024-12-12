
  import { Component } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { ApiService } from '../api.service';
  import { ActivatedRoute } from '@angular/router';
  import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

  @Component({
    selector: 'app-ailet',
    templateUrl: './ailet.component.html',
    styleUrls: ['./ailet.component.css']
  })
  export class AiletComponent {
    listMenuResponse:any = [];
    cmaresponses: { menu: SafeHtml }[] = [];
    menuId: any;
    Subheading:any = [];
    constructor(private httpClient: HttpClient,
      private route: ActivatedRoute,
      private apiService: ApiService,
      ) {
    }
  
    ngOnInit(){
      this.route.queryParams.subscribe(params=>{
        
        this.menuId= params['menuId'];
      });
  
      // this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
        this.apiService.getData().subscribe((data:any)=>{
        
        this.listMenuResponse = data.listMenuSubMenu;
            this.listMenuResponse.forEach((element: { listMenuResponse: any; }) => {
              element.listMenuResponse.forEach((x: { responses: any; menu_Id :any ;content_Subheading:any})=>
                {
                  // menu_Id:9 submenu_id:2 menu_Id==43
                 // if(x.menu_Id == this.menuId){
                  if(x.menu_Id == 43){   
                    console.log('menuId:', this.menuId);
                    this.cmaresponses.push({menu:x.responses});
                    if (x.content_Subheading!=null)
                    this.Subheading= x.content_Subheading;
                    console.log('hello eshwar',this.Subheading)
                  }
                  
                })
            });
      }
      
      );
     
     
    }
  }
  
  
  
  