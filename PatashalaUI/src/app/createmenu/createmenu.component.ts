import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { elementAt } from 'rxjs';
import { MessageService } from "primeng/api"; 

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.css']
})
export class CreatemenuComponent implements OnInit {
  allMenuItems: any = [];
  allSubItems: any=[];
  sublist:any=[];
  dialogContent : any;
  menu_Id:any;
  submenu_id:any;
  menu:any;
  menuUrl:any;
  submenu: any = "submenu";
  mainmenu:any = "mainmenu";
  input:any;
  constructor(private httpClient: HttpClient,
    private apiService: ApiService,
    private router: Router,
    private messageService:MessageService) {
  }
ngOnInit(): void {
  this.apiService.getData().subscribe((data:any)=>{
  //  console.log("data:" +  JSON.stringify(data))
    this.allMenuItems=[];
    this.allSubItems =[];
    // this.allMenuItems = data.listMenuSubMenu;
    data.listMenuSubMenu.forEach((element: { menu_Id: any; submenu_id: any; menu: any; menuUrl: any; }) => {
       this.allMenuItems.push({
        "menu_Id":element.menu_Id,
        "submenu_id":element.submenu_id,
        "menu":element.menu,
        "menuUrl":element.menuUrl
       })
     });
     data.listMenuSubMenu.forEach((element: { listMenuResponse: any; }) => {
      this.sublist =[];
      // this.allSubItems = element.listMenuResponse;
      element.listMenuResponse.forEach((subelement: { content_Subheading: any; menuResponsesId: any; menu_Id: any; responses: any; responses_Subheading: any; }) => {
        this.allSubItems.push({"content_Subheading":subelement.content_Subheading,
        "menuResponsesId":subelement.menuResponsesId,
        "menu_Id":subelement.menu_Id,
        "responses":subelement.responses,
        "responses_Subheading":subelement.responses_Subheading
      });
     });
  });
});
}

edit(evt:any){
  this.dialogContent = JSON.stringify(evt);
  this.menu_Id = evt.menu_Id;
  this.submenu_id = evt.submenu_id;
  this.menu = evt.menu;
  this.menuUrl = evt.menuUrl;
}

subedit(evt:any){
  this.dialogContent = JSON.stringify(evt);
}

onRowEditInit(element:any, type:any){
  if(type == "mainmenu")
  {
    this.input={
      "menu_Id":element.menu_Id,
      "submenu_id":element.submenu_id,
      "menu":element.menu,
      "menuUrl":element.menuUrl
    }
  }
  if(type == "submenu"){
    this.input={
      "menuResponsesId":element.menuResponsesId,
      "menu_Id":element.menu_Id,
      "responses":element.responses,
      "responses_Subheading":element.responses_Subheading
    }
}
}
onRowEditSave(element:any, type:any){
  if(type == "mainmenu"){
    this.input={
      "menu_Id":element.menu_Id,
      "submenu_id":element.submenu_id,
      "menu":element.menu,
      "menuUrl":element.menuUrl,
      "returnMessage": "string",
      "isActive": true,
      "listMenuResponse":[]

    }
    this.apiService.PostMenu(this.input).subscribe(data=> {
      if(data['returnMessage'] == "Successfully Posted"){
       this.messageService.add({ 
        severity: "success", 
        summary: "Successfully Posted", 
        detail: "Successfully Posted", 
      }); 
      }
      else{
        this.messageService.add({ 
          severity: "success", 
          summary: "Something went wrong", 
          detail: "Something went wrong", 
        }); 

      }
    })
  }
  if(type == "submenu"){
    this.input = {
      "menuResponsesId": element.menuResponsesId,
      "menu_Id": element.menu_Id,
      "responses": element.responses,
      "url": element.menuUrl,
      "createdOn": new Date().getTime(),
      "createdBy": localStorage.getItem("loggedUserId"),
      "udpatedOn": new Date().getTime(),
      "udpatedBy": localStorage.getItem("loggedUserId"),
      "responses_Subheading": element.responses_Subheading,
      "isActive": true,
      "sortorder": 0,
      "content_Subheading":element.content_Subheading,
      "returnMessage": "string"
    }

    this.apiService.PostMenuResponses(this.input).subscribe(data=> {
      if(data['returnMessage'] == "Successfully Posted"){
        this.messageService.add({ 
          severity: "success", 
          summary: "Successfully Posted", 
          detail: "Successfully Posted", 
        }); 
       }
       else{
        this.messageService.add({ 
          severity: "success", 
          summary: "Something went wrong", 
          detail: "Something went wrong", 
        }); 
 
       }
    })

  }
 
 
}
onRowEditCancel(evt:any, i:any, type:any){

}

}
function data(value: any): void {
  throw new Error('Function not implemented.');
}

