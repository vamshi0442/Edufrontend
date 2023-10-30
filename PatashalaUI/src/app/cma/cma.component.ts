

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cma',
  templateUrl: './cma.component.html',
  styleUrls: ['./cma.component.css']
})
export class CmaComponent {
  listMenuResponse:any = [];
  cmaresponses:any =[];
  cmasubheading:any=[];
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(){
    this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
      
      this.listMenuResponse = data;

      // this.cparesponses =  JSON.stringify(this.listMenuResponse.dynamicmenu);
      
          this.listMenuResponse.dynamicmenu.forEach((element: { listMenuResponse: any; }) => {
            element.listMenuResponse.forEach((x: { responses: any; menu_Id :any;responses_Subheading:any })=>
              {
                // menu_Id:9 submenu_id:2
                if(x.menu_Id == 24){
                  
                  this.cmaresponses =  x.responses;
                  this.cmasubheading =x.responses_Subheading;
                }
                
              })
          });
        }
    
    );
        }
      }
