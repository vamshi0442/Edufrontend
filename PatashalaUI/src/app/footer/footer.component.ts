import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  aboutPatashala: any;
  listMenuResponse:any = [];
  dynamicmenuItems:any =[];
  childmenuItems:any =[];
  constructor(private httpClient: HttpClient) {
  }

  // ngOnInit(){
  //   this.aboutPatashala = "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.";
  // }
  ngOnInit(){
    this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
      this.listMenuResponse = data.dynamicmenu;
      this.dynamicmenuItems = this.listMenuResponse;
      this.childmenuItems = this.listMenuResponse;
    });
   // this.getdynamicMenu();
    // this.dynamicmenuItems = this.listMenuResponse;
    // this.childmenuItems = this.listMenuResponse;
  
  }
  clickMethod(event:any){
  
    //  alert(JSON.stringify(event));
      event['listMenuResponse'].forEach((element: { responses: any; }) => {
      console.log(element.responses);
     });
    }
}
