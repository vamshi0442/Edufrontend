import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  ourteamresponses:any =[];
  listMenuResponse:any = [];
  subheading:any;
  menuId:any;
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
                if(x.menu_Id == 7){                  
                  this.ourteamresponses.push({menu:x.responses,Content_Subheading:x.content_Subheading});
                  if (x.responses_Subheading!=null)
                       this.subheading = x.responses_Subheading;
                }
                
              })
          });
    }
    
    );
   
   
  }
}
