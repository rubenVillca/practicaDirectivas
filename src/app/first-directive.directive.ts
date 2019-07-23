import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter')
  publiconMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter')
  publiconMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
