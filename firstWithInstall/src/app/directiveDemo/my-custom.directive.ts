import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyCustom]'
})
export class MyCustomDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseover')
  fun1() {
    this.element.nativeElement.style.backgroundColor = '';
  }

  @HostListener('mouseleave')
  fun2() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
