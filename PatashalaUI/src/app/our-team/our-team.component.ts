import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


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
    private route: ActivatedRoute) {
  }
  ngOnInit(){
    debugger;
    this.route.queryParams.subscribe(params=>{
      
      this.menuId= params['menuId'];
    });

    this.ourteamresponses = [];
    this.httpClient.get<any>("assets/menudata.json").subscribe((data)=>{
      this.listMenuResponse = data;
          this.listMenuResponse.dynamicmenu.forEach((element: { listMenuSubMenu: any; menu_Id:any }) => {
            
            this.ourteamresponses = element.listMenuSubMenu.filter((p: { menu_Id: any; }) => p.menu_Id == this.menuId);
          });
        });
        console.log(JSON.stringify(this.ourteamresponses))
    }
    
  }

