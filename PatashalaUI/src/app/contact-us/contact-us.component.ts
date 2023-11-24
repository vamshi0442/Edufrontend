import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  listMenuResponse:any = [];
  branchTestimonials:any=[];
  SingleMapUrl : any = [];
  constructor(private httpClient: HttpClient,
    private apiService: ApiService) {
  }
  
  ngOnInit(): void {
      this.apiService.getData().subscribe((data:any)=>{

      this.listMenuResponse = data;   
      //this.listMenuResponse.forEach((element: { listMenuResponse: any; }) => {
      //   element.listMenuResponse.forEach((x: { responses: any; menu_Id :any;responses_Subheading:any;content_Subheading:any })=>
      //       {

      //       })
      // });
      this.branchTestimonials = data.branches;
     // console.log(JSON.stringify(this.branchTestimonials))
    }
    );
  }
    
}
// this.listMenuResponse = data.listMenuSubMenu;
// this.listMenuResponse.forEach((element: { listMenuResponse: any; }) => {
//   element.listMenuResponse.forEach((x: { responses: any; menu_Id :any;responses_Subheading:any;content_Subheading:any })=>
//     {
//       if(x.menu_Id == 7){                  
//         this.ourteamresponses.push({menu:x.responses,Content_Subheading:x.content_Subheading});
//         if (x.responses_Subheading!=null)
//              this.subheading = x.responses_Subheading;
//       }
      
//     })
// });
// }

// );


// }
// }
