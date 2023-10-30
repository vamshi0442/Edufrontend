import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cima',
  templateUrl: './cima.component.html',
  styleUrls: ['./cima.component.css']
})
export class CimaComponent {
  listMenuResponse:any = [];
  cimaresponses:any =[];
  cimasubheading:any=[];
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
                if(x.menu_Id == 27){
                  
                  this.cimaresponses =  x.responses;
                  this.cimasubheading =x.responses_Subheading;
                }
                
              })
          });
        }
    
    );
        }
      }
