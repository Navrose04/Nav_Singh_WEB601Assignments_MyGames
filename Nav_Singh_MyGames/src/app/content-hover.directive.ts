import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appContentHover]',
  standalone: true
})
export class ContentHoverDirective {
  @Input('appContentHover') format: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.applyStyles(true); // Apply styles when mouse is over
  }

  @HostListener('mouseout') onMouseOut() {
    this.applyStyles(false); // Remove styles when mouse is out
  }

  private applyStyles(isHovered: boolean) {
    if (isHovered) { // If mouse is over
      if (this.format === 'type') {
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
      } else if (this.format === 'tag') {
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      }
    } else { // If mouse is out, remove underline and bold styles
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
    }
  }
}
