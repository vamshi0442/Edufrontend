import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acca',
  templateUrl: './acca.component.html',
  styleUrls: ['./acca.component.css']
})
export class AccaComponent {
  listMenuResponse:any = [];
  caresponses:any =[];
  menuId: any;
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
            element.listMenuResponse.forEach((x: { responses: any; menu_Id :any })=>
              {
                // menu_Id:9 submenu_id:2
               // if(x.menu_Id == this.menuId){
                if(x.menu_Id == 26){

                  
                  this.caresponses.push({menu:x.responses});
                }
                
              })
          });
       console.log(this.caresponses)
    }
    
    );
   
   
  }
}



