import {
  AfterViewInit,
  ContentChild,
  Directive,
  Input,
  Renderer2,
} from '@angular/core';
import { TableHeaderCellDefDirective } from './table-header-cell-def.directive';

@Directive({
  selector: '[appTableColumnDef]',
})
export class TableColumnDefDirective implements AfterViewInit {
  @Input('appTableColumnDef')
  colDef: string;
  @ContentChild(TableHeaderCellDefDirective)
  headerCell: TableHeaderCellDefDirective;
  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    console.log('cell', this.headerCell);
  }
}
