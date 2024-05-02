import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { EnquiryForm } from '../home/enquiry-form.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { MessageService } from 'primeng/api';
interface dropdownOptions {
  label: string;
  value: string;
}
@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.css']
})

export class NewsAndEventsComponent  {  
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
  
  ngOnInit(): void {
    
      // this.httpClient.get<any>("assets/response_1699881964735.json").subscribe((data)=>{
      this.apiService.getData().subscribe((data:any)=>{
      this.listMenuResponse = data.listMenuSubMenu;
      this.courselist =[];
      this.tempList =[];
      this.studentTestimonials=[];
      this.aboutPatashala =[];
      const storedFirstTime = localStorage.getItem("firsttime");
      if (storedFirstTime === null || storedFirstTime === undefined) {
        this.firsttime = 'true';
        localStorage.setItem("firsttime", "true");
        this.showDialog = true;
      } else {
        this.firsttime = storedFirstTime; // Assign the retrieved value
        localStorage.setItem("firsttime", "false");
        this.showDialog = false;
      }
       // Check if 8 hours have passed, then reset local storage flag
  //   const storedTime = parseInt(localStorage.getItem('storedTime') || '0', 10);
  //   const currentTime = new Date().getTime();
  //   const timeDifference = currentTime - storedTime;

  //   if (timeDifference >= 8 * 60 * 60 * 1000) {
  //     localStorage.setItem("firsttime", "false");
  //     localStorage.setItem('storedTime', currentTime.toString()); // Reset the stored time

        
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
    {label: 'Bihar', value: 'Bihar'},
    {label: 'Chennai', value: 'Chennai'},    
    {label: 'Karnataka', value: 'Karnataka'},
    {label: 'Kerela', value: 'Kerela'},
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Orrisa', value: 'Orrisa'},
    {label: 'Telangana', value: 'Telangana'},
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
 
  get fulName() {
    return this.dialogquickContactForm.get('fulName');
  }

  get demail() {
    return this.dialogquickContactForm.get('demail');
  }

  get dmobile() {
    return this.dialogquickContactForm.get('dmobile');
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
  }
