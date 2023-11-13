import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  listMenuResponse:any = [];
  branchTestimonials:any=[];
  constructor(private httpClient: HttpClient) {
  }
  // "branchAddress_Id": 1,
  // "branchAddressName": "Patashala Corporate Office",
  // "housenumber": "H No: 7-1-414/44/A",
  // "buidingNumber": null,
  // "buidingName": null,
  // "addessLine1": "Srinivas Nagar (East)",
  // "addessLine2": "SR Nagar",
  // "city": "Hyderabad",
  // "district": "RangaReddy",
  // "state": "Telangana",
  // "country": "India",
  // "zipcode": "500038",
  // "primaryPhonenumber": "99 66 05 06 07",
  // "secondaryPhonenumber": null,
  // "primaryEmail": "sales@patshala.co.in",
  // "secondaryEmail": null,
  // "supportPrimaryEmail": null,
  // "supportSecondaryEmail": null

  ngOnInit(): void {
    this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
      this.listMenuResponse = data;
      
      this.branchTestimonials=[];
      // this.listMenuResponse.dynamicmenu.forEach((element: { branches: any}){

      // }
      this.branchTestimonials = data.branches;
      console.log(JSON.stringify(this.branchTestimonials))
    }
    );
  }
    
}
