import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  
  imagesByFolder: Array<{ imageId: number, imageUrl: string, imageDescription: string }> = [];
  folders: { name: string; description: string }[] = [
    { name: 'TalkWithDirector', description: 'Talk With Director' },
    { name: 'CollectiveAchievments', description: 'Collective Achievments' },
    { name: 'Courtesy_visit_to_meet', description: 'Courtesy visit to meet' },
    { name: 'motherday', description: 'Mother’s Day event' },
    { name: 'SRNagarBranchLaunch', description: 'SRNagar Branch Launch' },
    { name: 'TeamPics', description: 'Team Pics' },
    { name: 'HimayathnagarBranchLaunch', description: 'Himayathnagar Branch Launch' },
    { name: 'Bridgemeet', description: 'Bridge Meet' },
    { name: 'BhavansEvent', description: 'Bhavans Event' },
    { name: 'College Visits', description: 'College Visits' },
    { name: 'Corporate Office', description: 'Corporate Office' },
    { name: 'Seminar', description: 'Seminar' }
  ];
  selectedFolder: string = this.folders[0].name;
    constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.loadImages(this.selectedFolder);
  }

  loadImages(folder: string) {
    this.apiService.getFacultyImages(1, folder).subscribe(
      (data: any) => {
        this.imagesByFolder = data.map((item: any) => ({
          imageId: item.imageId,
          imageUrl: item.imagesUrl,
          imageDescription: item.imageDescription
        }));
        console.log(`Images from ${folder}:`, this.imagesByFolder);
      },
      (error: any) => {
        console.error(`Error fetching images from ${folder}:`, error);
      }
    );
  }
  getSelectedFolderDescription(): string {
    const selectedFolderObj = this.folders.find(folder => folder.name === this.selectedFolder);
    return selectedFolderObj ? selectedFolderObj.description : '';
  }
  // onFolderChange(event: Event) {
  //   const target = event.target as HTMLSelectElement | null;
  //   if (target) {
  //     this.selectedFolder = target.value;
  //     this.loadImages(this.selectedFolder);
  //   }
  // }
  onFolderChange(folder: string) {
    this.selectedFolder = folder;
    this.loadImages(folder);
  }

  scrollLeft() {
    const container = document.querySelector('.folder-buttons') as HTMLElement;
    container.scrollBy({ left: -200, behavior: 'smooth' }); // Scrolls left by 200px
  }
  
  scrollRight() {
    const container = document.querySelector('.folder-buttons') as HTMLElement;
    container.scrollBy({ left: 200, behavior: 'smooth' }); // Scrolls right by 200px
   
  }
}