import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Content} from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };
  errorMessage!: string;

  successMessage: string = '';

  submitContent(): void {
    // Check if the title is not empty
    if (this.newContent.title.trim() !== '') {
      this.errorMessage = '';
      this.successMessage = '';
      new Promise((resolve, reject) => {
        // Simulate API delay
        setTimeout(() => {
          resolve('Content added successfully: ' + this.newContent.title);
        }, 2000);
      })
      .then(message => {
        // When the Promise resolves, set the success message
        this.successMessage = message as string;
        this.contentAdded.emit(this.newContent);
        // Clear the newContent object
        this.newContent = {
          id: 0,
          title: '',
          description: '',
          creator: '',
          imgURL: '',
          type: '',
          tags: []
        };
      })
      .catch(error => {
        this.errorMessage = 'Content could not be added.';
      });
    } else {
      this.errorMessage = 'Content could not be added.';
      this.successMessage = '';
    } 
  }
  
}