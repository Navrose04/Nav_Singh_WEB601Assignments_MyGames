import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContentHover]',
  standalone: true
})
export class ContentHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.applyStyles(true); // Apply styles when mouse is over
  }

  @HostListener('mouseout') onMouseOut() {
    this.applyStyles(false); // Remove styles when mouse is out
  }

  private applyStyles(isHovered: boolean) {
    if (isHovered) { // If mouse is over, apply underline and bold styles
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else { // If mouse is out, remove underline and bold styles
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
     
    }
  }
}