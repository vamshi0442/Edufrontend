import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  listMenuResponse: any = [];
  dynamicmenuItems: any = [];
  childmenuItems: any = [];
  email: any;
  phone: any;
  address: any;
  visible: boolean = true;
  loginForm!: FormGroup;
  submitted: boolean = false;
  validUser: boolean = false;
  isAdmin: boolean = false;
  constructor(private httpClient: HttpClient,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService) {
  }

  ngOnInit() {
    this.isAdmin = this.apiService.isUserAdmin()
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),

    });

    if (localStorage.getItem("loggedUserId")) {
      this.visible = false;
      this.validUser = true;
    }
    else {
      this.visible = true;
      this.validUser = false;
    }

    this.apiService.getData().subscribe((data: any) => {

      this.email = data.branches[0].primaryEmail;
      this.phone = data.branches[0].primaryPhonenumber;
      this.address = data.branches[0].city + ' , ' + data.branches[0].country;
      this.listMenuResponse = data.listMenuSubMenu;
      this.dynamicmenuItems = this.listMenuResponse;
      this.childmenuItems = this.listMenuResponse;


    });
  }
  loginSubmit(evt: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Please enter username and password",
        detail: "Please enter username and password",
      });
      //return;
    }
    else {
      let input = {
        username: evt.username,
        passwordhash: evt.password
      }
      this.apiService.Login(input).subscribe((data: any) => {
        if (data.userId != 0) {
          this.validUser = true;
          this.visible = false;
          localStorage.setItem("loggedUserId", data.userId);
          localStorage.setItem("userroleId", data.role);
          localStorage.setItem("isadmin", data.isadmin);
          window.location.href = '/view-enquiries';
        }
        else {
          this.validUser = false;
          this.messageService.add({
            severity: "success",
            summary: "Invalid credentials",
            detail: "Invalid credentials",
          });
        }
      });
    }

  }
  logout() {
    localStorage.clear();
    this.validUser = false;
    window.location.href = '/home'
    this.messageService.add({
      severity: "success",
      summary: "User Successfully logged out",
      detail: "",
    });
  }
  loginuser() {
    localStorage.clear();
    this.validUser = false;
    this.visible = true;
  }
}



