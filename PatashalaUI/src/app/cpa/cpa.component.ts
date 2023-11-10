import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import  dynamicmenu from '../../assets/data.json';

@Component({
  selector: 'app-cpa',
  templateUrl: './cpa.component.html',
  styleUrls: ['./cpa.component.css']
})
export class CpaComponent {
  cparesponses:any =[];
  listMenuResponse:any = [];
  constructor(private httpClient: HttpClient) {
  //  this.listMenuResponse = dynamicmenu;
  }

  ngOnInit(){
    this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
      
      this.listMenuResponse = data;

      // this.cparesponses =  JSON.stringify(this.listMenuResponse.dynamicmenu);
      
          this.listMenuResponse.dynamicmenu.forEach((element: { listMenuResponse: any; }) => {
            element.listMenuResponse.forEach((x: { responses: any; menu_Id :any })=>
              {
                // menu_Id:9 submenu_id:2
                if(x.menu_Id == 10){
                  this.cparesponses =  x.responses;
                }
                
              })
          });

    }
    
    );
   
   
  }
}
