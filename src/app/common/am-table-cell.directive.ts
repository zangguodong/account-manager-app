import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAmTableCell]',
})
export class AmTableCellDirective implements OnInit {
  @Input()
  appAmTableCell: string;
  constructor(private element: ElementRef, private render2: Renderer2) {}

  ngOnInit(): void {
    this.render2.addClass(
      this.element.nativeElement,
      `am-table-cell__${this.appAmTableCell}`,
    );
  }
}
