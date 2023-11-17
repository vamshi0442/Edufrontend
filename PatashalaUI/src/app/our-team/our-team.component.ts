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

    this.ourteamresponses = [];
    // this.httpClient.get<any>("assets/menudata.json").subscribe((data)=>{
      this.apiService.getData().subscribe((data:any)=>{
        
      this.listMenuResponse = data.listMenuSubMenu;
      let response: any = [];
          this.listMenuResponse.forEach((element: { listMenuResponse: any; menu_Id:any }) => {
            
            response = element.listMenuResponse.filter((p: { menu_Id: any; }) => 
             // p.menu_Id == this.menuId);
            p.menu_Id == 7);

            if(response.length != 0){
               this.ourteamresponses  = response;
               console.log(JSON.stringify(this.ourteamresponses ))
            }
            else{
              // console.log(JSON.stringify(this.menuId + response))
            }
           

          });
        });
       
    }
    
  }

