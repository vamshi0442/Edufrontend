import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import  {ActivatedRoute} from   '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  listMenuResponse:any = [];
  aboutusresponses:any =[];
  menuId: any;
  responses_Subheading:any =[];
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
                element.listMenuResponse.forEach((x: { responses: any; menu_Id :any ;content_Subheading:any;responses_Subheading:any})=>
                  {
                    if(x.menu_Id == 6){  
                      
                      this.aboutusresponses.push({menu:x.responses,contentsubheading:x.content_Subheading});
                      if (x.responses_Subheading!=null)
                          this.responses_Subheading= x.responses_Subheading;
                        
                    }
                    
                  })
              });
        }
        
        );
  }
}

