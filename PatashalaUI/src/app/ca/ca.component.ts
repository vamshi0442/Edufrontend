import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.css']
})
export class CaComponent {
  listMenuResponse:any = [];
  caresponses:any =[];
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
                if(x.menu_Id == 23){
                  
                  this.caresponses =  x.responses;
                }
                
              })
          });
       console.log(this.caresponses)
    }
    
    );
   
   
  }
}

