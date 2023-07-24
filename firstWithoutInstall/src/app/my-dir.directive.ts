import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[vhaashMyDir], .vhaashMyDir'
})
export class MyDirDirective {

  constructor(private element: ElementRef) {
    // element.nativeElement.style.color = 'red';
  }

  @HostListener('mouseover')
  custommouseover() {
    this.element.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave')
  custommouseleave() {
    this.element.nativeElement.style.color = '';
  }

  @HostListener('click')
  custommouseclick() {
    this.element.nativeElement.innerHTML = 'Heading <mark>Text</mark> Updated';
    // this.element.nativeElement.appendChild('<p>Paragraph Created By Custom Directive</p>');
  }
}
