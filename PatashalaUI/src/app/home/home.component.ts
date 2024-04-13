import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { EnquiryForm } from './enquiry-form.model';
import { MessageService } from 'primeng/api';
interface dropdownOptions {
  label: string;
  value: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {  
  images: any = [];
  imageDescription : any = [];
  Imgslst: any[] = [];
  currentPage: number = 0;
  pageSize: number = 4;
  autoScrollInterval: any;
  listMenuResponse:any = [];
  aboutPatashala:any =[];
  courselist:any =[];
  tempList:any=[];
  subheading:any=[];
  studentTestimonials:any=[];
  visible: boolean =true;
  quickContactForm!: FormGroup;
  dialogquickContactForm!:FormGroup;
  states!: dropdownOptions[];
  courses!: dropdownOptions[];
  successMessage: any;
  successMessageindialog :any;
  firsttime: string = "true";
  showDialog: boolean = false; // Flag to control visibility of p-dialog
  constructor(private httpClient: HttpClient,
    private apiService: ApiService,
  private messageService:MessageService) {
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    items: 4,  // Display 4 items at a time
    dots: false,
    navSpeed: 700,
    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit(): void {
    
      // this.httpClient.get<any>("assets/response_1699881964735.json").subscribe((data)=>{
      this.apiService.getData().subscribe((data:any)=>{
      this.listMenuResponse = data.listMenuSubMenu;
      this.courselist =[];
      this.tempList =[];
      this.studentTestimonials=[];
      this.aboutPatashala =[];
      this.loadImages();
      //this.setupAutoScroll();
      // if (storedFirstTime === null || storedFirstTime === undefined) {
      //   this.firsttime = 'true';
      //   localStorage.setItem("firsttime", "true");
      //   this.showDialog = true;
      // } else {
      //   this.firsttime = storedFirstTime; // Assign the retrieved value
      //   localStorage.setItem("firsttime", "false");
      //   this.showDialog = false;
      // }
       // Check if 8 hours have passed, then reset local storage flag
  //   const storedTime = parseInt(localStorage.getItem('storedTime') || '0', 10);
  //   const currentTime = new Date().getTime();
  //   const timeDifference = currentTime - storedTime;

  //   if (timeDifference >= 8 * 60 * 60 * 1000) {
  //     localStorage.setItem("firsttime", "false");
  //     localStorage.setItem('storedTime', currentTime.toString()); // Reset the stored time
  //         }
  // // Determine whether to show or hide the dialog
  // this.showDialog = this.firsttime === 'true';
  
      this.studentTestimonials = data.branches;
          this.listMenuResponse.forEach((element: { listMenuResponse: any; menu:any; menuUrl:any; responses: any; menu_Id :any; submenu_id:any ;content_Subheading:any }) => {
            if(element.submenu_id == 10 || element.submenu_id == 25){
              
              element.listMenuResponse.forEach((x: { responses: any; menu_Id :any })=>
              {
                if(x.menu_Id == element.menu_Id){
                  this.tempList.push({menu:element.menu, menuUrl:element.menuUrl, menu_Id: element.menu_Id, response: x.responses});
                  this.courselist =  this.tempList;
                  // this.courselist = JSON.stringify(this.tempList);
                 // this.subheading =x.
                }
                
              })
              
            }
            if(element.menu_Id==6){
              
              element.listMenuResponse.forEach((x:{responses: any;responses_Subheading:any;})=>{
                let tt = String(x.responses)
                this.aboutPatashala.push(tt.substring(0,620));
                this.subheading = x.responses_Subheading;
              })
            }
          });
          //this.studentTestimonials = data.branches;
        }
    );

    this.quickContactForm = new FormGroup({
      fullName: new FormControl(null, Validators.compose([Validators.required])),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null,  [Validators.required,
        Validators.pattern(/^\d{10,14}$/), // Assuming 10-digit mobile number, adjust pattern accordingly
      ]),
      state: new FormControl(null, ),
       course: new FormControl(null,)
      // IPAddress:  new FormControl(null,),
      // CreatedOn:  new FormControl(null,),      
      // ReturnMessage: new FormControl(null,)
  });
  this.dialogquickContactForm = new FormGroup({
    fulName: new FormControl(null, Validators.compose([Validators.required])),
    demail: new FormControl(null, [Validators.required, Validators.email]),
    dmobile: new FormControl(null,  [Validators.required,
      Validators.pattern(/^\d{10,14}$/), // Assuming 10-digit mobile number, adjust pattern accordingly
    ]),
    dstate: new FormControl(null, ),
     dcourse: new FormControl(null,)
    // IPAddress:  new FormControl(null,),
    // CreatedOn:  new FormControl(null,),      
    // ReturnMessage: new FormControl(null,)
});
  
  this.states = [
    {label: 'Andhra Pradesh', value: 'AndhraPradesh'},
    {label: 'Arunachal Pradesh', value: 'ArunachalPradesh'},
    {label: 'Assam', value: 'Assam'},
    {label: 'Bihar', value: 'Bihar'}
  ]

  this.courses  =[
    {label: 'CS', value:'CS'},
    {label: ' CA', value:' CA'},
    {label: 'CMA', value:'CMA'},
    {label: ' ACCA', value:' ACCA'},
    {label: 'CIMA', value:'CIMA'},
    {label: 'CMA(US)', value:'CMA(US)'}
  ]
  }
  get fullName() {
    return this.quickContactForm.get('fullName');
  }
  get fulName() {
    return this.dialogquickContactForm.get('fulName');
  }

  get demail() {
    return this.dialogquickContactForm.get('demail');
  }
  get email() {
    return this.quickContactForm.get('email');
  }
  get dmobile() {
    return this.dialogquickContactForm.get('dmobile');
  }
  get mobile() {
    return this.quickContactForm.get('mobile');
  }
   onSubmit() {
    // console.log(this.quickContactForm);
    // console.log(this.quickContactForm.value); 
  
    if (this.quickContactForm.valid) {
      const formData: EnquiryForm = new EnquiryForm(
        0, // You may set appropriate default values or handle this differently
        this.quickContactForm.get('fullName')?.value || '',
        this.quickContactForm.get('email')?.value || '',
        this.quickContactForm.get('mobile')?.value || '',
        new Date(),
        this.quickContactForm.get('state')?.value || '',
        this.quickContactForm.get('course')?.value || '',
        '', // Provide an appropriate value for IPAddress
        '' // Provide an appropriate value for ReturnMessage
      );
      // Assuming you have a method in your API service to post data
      this.apiService.PostEnquiryForm(formData)
        .subscribe({
          next: (response) => {
            // Handle success response
            // console.log('Form submitted successfully', response);
            this.successMessage= response.returnMessage+'....'; 
           // Reset the form values
           this.quickContactForm.reset();
          },
          error: (error) => {
            // Handle error response
            // console.error('Error submitting form', error);
          }
        });
    }
    else {
      // Mark form controls as touched to trigger validation messages
      this.markFormGroupTouched(this.quickContactForm);
    }
  }
  
  donSubmit() {
   // console.log(this.dialogquickContactForm.value);
  
    if (this.dialogquickContactForm.valid) {
      const dformData: EnquiryForm = new EnquiryForm(
        0, // You may set appropriate default values or handle this differently
        this.dialogquickContactForm.get('fulName')?.value || '',
        this.dialogquickContactForm.get('demail')?.value || '',
        this.dialogquickContactForm.get('dmobile')?.value || '',
        new Date(),
        this.dialogquickContactForm.get('dstate')?.value || '',
        this.dialogquickContactForm.get('dcourse')?.value || '',
        '', // Provide an appropriate value for IPAddress
        '' // Provide an appropriate value for ReturnMessage
      );
      // Assuming you have a method in your API service to post data
      this.apiService.PostEnquiryForm(dformData)
        .subscribe({
          next: (response) => {
            // Handle success response
           // console.log('Form submitted successfully', response);
            this.successMessageindialog = response.returnMessage+'....'; 
            // Reset the form values
            this.dialogquickContactForm.reset();
          },
          error: (error) => {
            // Handle error response
           // console.error('Error submitting form', error);
          }
        });
    }
    else {
      // Mark form controls as touched to trigger validation messages
      this.markFormGroupTouched(this.dialogquickContactForm);
    }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: FormGroup<any>) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
// Add a method to display success messages
private showSuccessMessage(message: string): void {
  // Display the success message to the user (e.g., using a toast notification, alert, etc.)
  // console.log('Success Message:', message);
  this.messageService.add({ 
    severity: "success", 
    summary: message, 
    detail: message, 
  });
}

// ngOnDestroy(): void {
//   if (this.autoScrollInterval) {
//     clearInterval(this.autoScrollInterval);
//   }
// }

// setupAutoScroll(): void {
//   this.autoScrollInterval = setInterval(() => {
//     if (this.currentPage * this.pageSize >= this.images.length) {
//       this.currentPage = 0;  // Optionally reset to start or handle as needed
//     }
//     this.loadMoreImages();
//   }, 3000); // Change the interval as needed
// }
loadImages(): void {
  this.apiService.GetImages().subscribe({
    next: (data: any) => {
      this.images = this.images.concat(data);
      this.currentPage++;    
      // Process each image object directly from the data array
      this.images.forEach((image: any) => {
        // Now directly logging and pushing image names, since each item in the array is an image object
          this.Imgslst.push({ Image: 'assets/img'+image.folder+image.imageName, ImageDescription:image.imageDescription });
      });
    
      // Log the full list after updates
    },
    error: (error: any) => {
      console.error('Error fetching images', error);
    }
  });
}


// loadMoreImages(): void {
//   if (this.currentPage * this.pageSize < this.images.length) {
//     this.loadImages();
//   } else {
//     // Reset or handle end of images list
//     this.currentPage = 0;
//     this.images = [];
//     this.loadImages();
//   }
// }
  }

