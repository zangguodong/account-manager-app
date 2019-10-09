import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appTableHeaderRowDef]',
})
export class TableHeaderRowDefDirective {
  @Input('appTableHeaderRowDef')
  rowDefs: any[];
  constructor() {}
}
