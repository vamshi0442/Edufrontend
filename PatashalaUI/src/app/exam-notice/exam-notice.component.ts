import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-exam-notice',
  templateUrl: './exam-notice.component.html',
  styleUrls: ['./exam-notice.component.css']
})
export class ExamnoticeComponent {
  isAdmin: boolean = false;
  Examnotiecmodel: examnotice[] = [];
  newNoticeForm: FormGroup;
  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.newNoticeForm = this.fb.group({
      title: ['', Validators.required],
      link: [''],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getExamNoties()
    const isAdminValue = localStorage.getItem("isadmin");
    this.isAdmin = isAdminValue === "true"; 
    console.log('Is Admin:', this.isAdmin);
  }

  getExamNoties() {
    this.apiService.getExamNoties().subscribe({
      next: (data: examnotice[]) => {
        this.Examnotiecmodel = data;
        console.log(data)
      }
    })
  }
  onSubmit(): void {
    if (this.newNoticeForm.valid) {
      const newNotice = { id: this.Examnotiecmodel.length + 1, ...this.newNoticeForm.value } as examnotice;
      this.Examnotiecmodel.push(newNotice);
      this.newNoticeForm.reset();
      console.log('New Notice Added:', newNotice);
    }
  }
}
interface examnotice {
  "id": number,
  "name": "string",
  "time": "string",
  "link": "string",
  "title": "string",
}
