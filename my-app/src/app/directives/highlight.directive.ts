import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[myHighlight]',
})
export class HighlightDirective {
  @Input() favColor: string = 'green';

  @HostBinding('style.backgroundColor') bgColor: any;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
  }

  // constructor(private elRef: ElementRef) {
  //   this.elRef.nativeElement.style.color = 'blue';
  // }
}
