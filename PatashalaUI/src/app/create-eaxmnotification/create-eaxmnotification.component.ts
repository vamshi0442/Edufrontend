import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { elementAt } from 'rxjs';
import { MessageService } from "primeng/api"; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-eaxmnotification',
  templateUrl: './create-eaxmnotification.component.html',
  styleUrls: ['./create-eaxmnotification.component.css']
})
export class CreateeaxmnotificationComponent implements OnInit {
  examnotice: FormGroup;
  

  constructor(private fb: FormBuilder,private apiService: ApiService){
    this.examnotice = this.fb.group({
      title: ['', Validators.required],
      link: ['',Validators.required],
      time: ['', Validators.required],
      name:['', Validators.required]
    });
  }
  ngOnInit(): void {}
 
  onSubmit(): void {
    if (this.examnotice.valid) {
      const formData = this.examnotice.value;
      this.apiService.PostExamNoties(formData).subscribe({
        next: (response) => {
          console.log('Notification saved:', response);
          // alert('Exam notification saved successfully!');
          this.examnotice.reset(); 
        },
        error: (err) => {
          console.error('Error saving notification:', err);
          // alert('Failed to save the exam notification. Please try again.');
        },
      });
    } else {
      console.log('Form is invalid!');
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
