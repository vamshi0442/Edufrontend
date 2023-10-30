import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acca',
  templateUrl: './acca.component.html',
  styleUrls: ['./acca.component.css']
})
export class AccaComponent {
  listMenuResponse:any = [];
  accaresponses:any =[];
  accasubheading:any=[];
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
                if(x.menu_Id == 26){
                  
                  this.accaresponses =  x.responses;
                  this.accasubheading= x.responses_Subheading;
                }
                
              })
          });
    }
    
    );
   
   
  }
}
