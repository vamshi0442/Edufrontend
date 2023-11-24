
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html',
  styleUrls: ['./cs.component.css']
})
export class CsComponent {
  listMenuResponse:any = [];
  csresponses:any =[];
  menuId:any=[];
  responses_Subheading:any=[];
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService,
    ){
  }

  ngOnInit(){
    this.csresponses =[];
    this.route.queryParams.subscribe(params=>{
      this.menuId= params['menuId'];
    });
    // this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
    //   this.listMenuResponse = data;
      this.apiService.getData().subscribe((data:any)=>{
        
        this.listMenuResponse = data.listMenuSubMenu;
          this.listMenuResponse.forEach((element: { listMenuResponse: any; }) => {
            element.listMenuResponse.forEach((x: { responses: any; menu_Id :any;responses_Subheading:any;content_Subheading:any })=>
              {
                
                if(x.menu_Id == 30){                               
                  this.csresponses.push({menu:x.responses,Content_Subheading:x.content_Subheading});
                  if (x.responses_Subheading!=null)
                  this.responses_Subheading = x.responses_Subheading;        
                }
                
              })
          });

    }
    
    );
   
   
  }
}
