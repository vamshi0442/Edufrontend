

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html',
  styleUrls: ['./cs.component.css']
})
export class CsComponent {
  listMenuResponse:any = [];
  cmaresponses:any =[];
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(){
    this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
      
      this.listMenuResponse = data;

      // this.cparesponses =  JSON.stringify(this.listMenuResponse.dynamicmenu);
      
          this.listMenuResponse.dynamicmenu.forEach((element: { listMenuResponse: any; }) => {
            element.listMenuResponse.forEach((x: { responses: any; menu_Id :any })=>
              {
                // menu_Id:9 submenu_id:2
                if(x.menu_Id == 24){
                  
                  this.cmaresponses =  x.responses;
                }
                
              })
          });
        }
    
    );
        }
      }
