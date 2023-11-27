import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';



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
  email:any;
  phone:any;
  address:any;
  constructor(private httpClient: HttpClient,
  private apiService: ApiService,
  private router: Router
  ) {
  }

  ngOnInit(){
   // this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
   //   this.listMenuResponse = data.dynamicmenu;
   this.apiService.getData().subscribe((data:any)=>{
    this.email = data.branches[0].primaryEmail;
    this.phone = data.branches[0].primaryPhonenumber;
    this.address = data.branches[0].city + ' , ' + data.branches[0].country;
     this.listMenuResponse = data.listMenuSubMenu
      this.dynamicmenuItems = this.listMenuResponse;
      this.childmenuItems = this.listMenuResponse;
    });
  }
}
