import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
listMenuResponse:any = [];
dynamicmenuItems:any =[];
childmenuItems:any =[];
email:any;
phone:any;
address:any;
menuItem:any=[];
menuList:any=[];
subMenuList:any=[];
subsubMenuList:any=[];
constructor(private httpClient: HttpClient,
  private apiService: ApiService,
  private router: Router) {
}

ngOnInit(){
   //this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
    this.apiService.getData().subscribe((data:any)=>{
      
      this.email = data.branches[0].primaryEmail;
      this.phone = data.branches[0].primaryPhonenumber;
      this.address = data.branches[0].city + ' , ' + data.branches[0].country;
    this.listMenuResponse = data.listMenuSubMenu;
    this.dynamicmenuItems = this.listMenuResponse;
    this.childmenuItems = this.listMenuResponse;

    
  });
  this.getMenu();

}

getMenu(){
  this.menuList =[];
  this.menuItem=[];
  this.subMenuList=[];
  this.subsubMenuList=[];
  // this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
  //   this.listMenuResponse = data.dynamicmenu;
  this.apiService.getData().subscribe((data:any)=>{
    
    this.menuList = data.listMenuSubMenu;
    this.menuList.forEach((element: { submenu_id: number; menuUrl: any; menu:any, menu_Id:any }) => {
      if(element.submenu_id == 0){
        this.subMenuList =[];
        this.menuList.forEach((subelement: { submenu_id: any; menu: any; menuUrl: any; menu_Id:any; }) => {
          if(element.menu_Id == subelement.submenu_id){
            this.subsubMenuList=[];
            this.menuList.forEach((subsubelement : { submenu_id: any; menu: any; menuUrl: any; }) => {
             if(subelement.menu_Id == subsubelement.submenu_id){
                this.subsubMenuList.push({menu:subsubelement.menu, menuUrl:subsubelement.menuUrl});
             }
            });
            this.subMenuList.push({menu:subelement.menu, menuUrl:subelement.menuUrl,subSubMenu:this.subsubMenuList});
          }
        });
       this.menuItem.push({menu:element.menu, menuUrl:element.menuUrl, subMenu:this.subMenuList});
       console.log(this.menuItem);
      }
    });
  });
}


redirect(event:any){
  
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate( [event.menuUrl],
        { queryParams: { menuId: event.menu_Id } });
});
  // this.router.navigate(
  // //  ['/ourteam'],
  //   [event.menuUrl],
  //   { queryParams: { menuId: event.menu_Id } }
  // );
  }

redirectSubmenu(event:any){
  
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate( [event.menuUrl],
        { queryParams: { menuId: event.menu_Id } });
});
}
}
