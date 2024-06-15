import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  imageData: any[] = []; 
  subheading: any;
  menuId: any;
  imageDescription:any[]=[];
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
   
    this.apiService.getFacultyImages(1, 'Faculty').subscribe(
      (data: any) => {
        this.imageData = data.map((item: any) => {
          return {
            imageUrl: item.imagesUrl,
            imageDescription: item.imageDescription
          };
        });
        console.log(this.imageData)
      },
      (error: any) => {
        console.error('Error fetching images:', error);
      }
    );
  }
}
