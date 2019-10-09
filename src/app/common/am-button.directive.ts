import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
type SizeType = 'normal' | 'large';
@Directive({
  selector: '[appAmButton]',
})
export class AmButtonDirective implements OnInit {
  @Input()
  size: SizeType = 'normal';
  @Input()
  solid = false;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'am-button');
    if (this.size === 'large') {
      this.renderer2.addClass(
        this.elementRef.nativeElement,
        'am-button--large',
      );
    }
    if (this.solid) {
      this.renderer2.addClass(
        this.elementRef.nativeElement,
        'am-button--solid',
      );
    }
  }
}
