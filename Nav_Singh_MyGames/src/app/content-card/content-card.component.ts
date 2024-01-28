import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
@Input() content:any;  

displayContent(id: number, title: string) {
  console.log(`Content ID: ${id}, Title: ${title}`);
}

}