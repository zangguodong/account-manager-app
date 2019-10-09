import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHeaderContentRow]',
})
export class HeaderContentRowDirective {
  constructor(private viewContainerRef: ViewContainerRef) {}
}
