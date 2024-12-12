
  import { Component } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { ApiService } from '../api.service';
  import { ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'app-clat',
    templateUrl: './clat.component.html',
    styleUrls: ['./clat.component.css']
  })
  export class ClatComponent {
    listMenuResponse:any = [];
    cmaresponses:any =[];
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
                  // menu_Id:9 submenu_id:2
                 // if(x.menu_Id == this.menuId){
                  if(x.menu_Id == 46){                    
                    this.cmaresponses.push({menu:x.responses});
                    if (x.content_Subheading!=null)
                    this.Subheading= x.content_Subheading;
                  }
                  
                })
            });
      }
      
      );
     
     
    }
  }
  
  
  
  