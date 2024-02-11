import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContentHoverDirective } from '../content-hover.directive';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports:[CommonModule, ContentHoverDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
@Input() content:any;  

displayContent(id: number, title: string) {
  console.log(`Content ID: ${id}, Title: ${title}`);
}

}