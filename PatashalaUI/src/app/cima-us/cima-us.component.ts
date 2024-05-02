
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cima-us',
  templateUrl: './cima-us.component.html',
  styleUrls: ['./cima-us.component.css']
})
export class CimaUsComponent {
  listMenuResponse:any = [];
  caresponses:any =[];
  menuId: any;
  Subheading:any=[];
  
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
            element.listMenuResponse.forEach((x: { responses: any; menu_Id :any ;responses_Subheading:any})=>
              {
                // menu_Id:9 submenu_id:2
               // if(x.menu_Id == this.menuId){
                if(x.menu_Id == 28){

                  
                  this.caresponses.push({menu:x.responses});
                  if (x.responses_Subheading!=null)
                      this.Subheading = x.responses_Subheading;
                }
                
              })
          });
    }
    
    );
   
   
  }
}




