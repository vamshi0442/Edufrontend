import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  listMenuResponse: any = [];
  dynamicmenuItems: any = [];
  childmenuItems: any = [];
  email: any;
  phone: any;
  address: any;
  menuItem: any = [];
  menuList: any = [];
  subMenuList: any = [];
  subsubMenuList: any = [];
  visible: boolean = true;
  loginForm!: FormGroup;
  submitted: boolean = false;
  validUser: boolean = false;
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService
  ) {}
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='bi bi-chevron-left'></i>",
      "<i class='bi bi-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  ngOnInit() {
    //this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

    if (localStorage.getItem('loggedUserId')) {
      this.visible = false;
      this.validUser = true;
    } else {
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
    this.getMenu();
  }

  getMenu() {
    this.menuList = [];
    this.menuItem = [];
    this.subMenuList = [];
    this.subsubMenuList = [];
    // this.httpClient.get<any>("assets/data.json").subscribe((data)=>{
    //   this.listMenuResponse = data.dynamicmenu;
    this.apiService.getData().subscribe((data: any) => {
      this.menuList = data.listMenuSubMenu;
      this.menuList.forEach(
        (element: {
          submenu_id: number;
          menuUrl: any;
          menu: any;
          menu_Id: any;
        }) => {
          if (element.submenu_id == 0) {
            this.subMenuList = [];
            this.menuList.forEach(
              (subelement: {
                submenu_id: any;
                menu: any;
                menuUrl: any;
                menu_Id: any;
              }) => {
                if (element.menu_Id == subelement.submenu_id) {
                  this.subsubMenuList = [];
                  this.menuList.forEach(
                    (subsubelement: {
                      submenu_id: any;
                      menu: any;
                      menuUrl: any;
                    }) => {
                      if (subelement.menu_Id == subsubelement.submenu_id) {
                        this.subsubMenuList.push({
                          menu: subsubelement.menu,
                          menuUrl: subsubelement.menuUrl,
                        });
                      }
                    }
                  );
                  this.subMenuList.push({
                    menu: subelement.menu,
                    menuUrl: subelement.menuUrl,
                    subSubMenu: this.subsubMenuList,
                  });
                }
              }
            );
            this.menuItem.push({
              menu: element.menu,
              menuUrl: element.menuUrl,
              subMenu: this.subMenuList,
            });
          }
        }
      );
    });
  }

  redirect(event: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([event.menuUrl], {
        queryParams: { menuId: event.menu_Id },
      });
    });
    // this.router.navigate(
    // //  ['/ourteam'],
    //   [event.menuUrl],
    //   { queryParams: { menuId: event.menu_Id } }
    // );
  }

  redirectSubmenu(event: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([event.menuUrl], {
        queryParams: { menuId: event.menu_Id },
      });
    });
  }

  loginSubmit(evt: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Please enter username and password',
        detail: 'Please enter username and password',
      });
      //return;
    } else {
      let input = {
        username: evt.username,
        passwordhash: evt.password,
      };
      this.apiService.Login(input).subscribe((data: any) => {
        if (data.userId != 0) {
          this.validUser = true;
          this.visible = false;
          localStorage.setItem('loggedUserId', data.userId);
          localStorage.setItem('userroleId', data.role);
          localStorage.setItem('isadmin', data.isadmin);
          window.location.href = '/view-enquiries';
        } else {
          this.validUser = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Invalid credentials',
            detail: 'Invalid credentials',
          });
        }
      });
    }
  }
  logout() {
    localStorage.clear();
    this.validUser = false;
    window.location.href = '/home';
    this.messageService.add({
      severity: 'success',
      summary: 'User Successfully logged out',
      detail: '',
    });
  }
  loginuser() {
    localStorage.clear();
    this.validUser = false;
    this.visible = true;
  }
}
