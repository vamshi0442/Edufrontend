import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Title } from "@angular/platform-browser";


@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent {
  visionmissionresponses:any =[];
  listMenuResponse:any = [];
  subheading:any;
  menuId:any;
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private title: Title
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
                
                if(x.menu_Id == 31){                  
                  this.visionmissionresponses.push({menu:x.responses,menus:x.menu_Id,Content_Subheading:x.content_Subheading});
                  this.subheading = x.responses_Subheading;
                }
                
              })
          });
    }
    
    );
   
   
  }
}
