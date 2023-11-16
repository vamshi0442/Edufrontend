import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cmaus',
  templateUrl: './cmaus.component.html',
  styleUrls: ['./cmaus.component.css']
})
export class CmausComponent {
  listMenuResponse:any = [];
  cmausresponses:any =[];
  cmaussubheading:any=[];
  constructor(private httpClient: HttpClient,
    private apiService: ApiService) {
  }

  ngOnInit(){
   // this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
      this.apiService.getData().subscribe((data:any)=>{
      
      this.listMenuResponse = data;

      // this.cparesponses =  JSON.stringify(this.listMenuResponse.dynamicmenu);
      
          this.listMenuResponse.dynamicmenu.forEach((element: { listMenuResponse: any; }) => {
            element.listMenuResponse.forEach((x: { responses: any; menu_Id :any;responses_Subheading:any })=>
              {
                // menu_Id:9 submenu_id:2
                if(x.menu_Id == 28){
                  
                  this.cmausresponses =  x.responses;
                  this.cmaussubheading =x.responses_Subheading;
                }
                
              })
          });
        }
    
    );
        }
      }