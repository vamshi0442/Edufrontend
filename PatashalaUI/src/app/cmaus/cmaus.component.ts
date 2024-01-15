import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cmaus',
  templateUrl: './cmaus.component.html',
  styleUrls: ['./cmaus.component.css']
})
export class CmausComponent {
    listMenuResponse:any = [];
    cmausresponses:any =[];
    cmaussubheading:any=[];
    menuId: any;
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
              element.listMenuResponse.forEach((x: { responses: any; menu_Id :any;responses_Subheading:any;content_Subheading:any })=>
                {
                  // menu_Id:9 submenu_id:2
                 // if(x.menu_Id == this.menuId){
                  if(x.menu_Id == 28){
  
                    
                    this.cmausresponses.push({menu:x.responses,Content_Subheading:x.content_Subheading});
                   if (x.responses_Subheading!=null)
                       this.cmaussubheading = x.responses_Subheading;
                  }
                  
                })
            });
      }
      
      );
     
     
    }
  }
  
  
  
  