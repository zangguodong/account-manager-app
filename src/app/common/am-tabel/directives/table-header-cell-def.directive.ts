import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTableHeaderCellDef]',
})
export class TableHeaderCellDefDirective {
  constructor(private templateRef: TemplateRef<any>) {
    console.log('template', this.templateRef);
  }
}
