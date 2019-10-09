import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ColDefinationType } from '../type';
import { AmTableCellDirective } from '../am-table-cell.directive';

@Component({
  selector: 'app-am-table',
  templateUrl: './am-tabel.component.html',
  styleUrls: ['./am-tabel.component.scss'],
})
export class AmTabelComponent implements OnInit {
  @ViewChild(AmTableCellDirective)
  appAmTableCells: AmTableCellDirective;
  @Input()
  colDefs: ColDefinationType[];

  // tslint:disable-next-line:no-input-rename
  @Input('data')
  dataSource: any[];

  constructor(private viewContainerRef: ViewContainerRef) {
    console.log(this.viewContainerRef);
  }

  ngOnInit() {
    // console.log(this.appAmTableCells);
  }
}
//  <aui-table [dataSource]="list.items$" [trackBy]="trackByFn">
//     <ng-container auiTableColumnDef="name">
//       <aui-table-header-cell *auiTableHeaderCellDef>
//         {{ 'name' | translate }}
//       </aui-table-header-cell>
//       <aui-table-cell *auiTableCellDef="let item">
//         <div>
//           <a (click)="alarmDetail(item)">{{ item.metadata.name }}</a>
//         </div>
//       </aui-table-cell>
//     </ng-container>
//     <ng-container auiTableColumnDef="workload">
//       <aui-table-header-cell *auiTableHeaderCellDef>
//         {{ 'workload' | translate }}
//       </aui-table-header-cell>
//       <aui-table-cell *auiTableCellDef="let item">
//         <a
//           href="javascript:;"
//           (click)="workloadDetail(item)"
//           [auiTooltip]="item | aclLabel: 'name':'alert'"
//           auiTooltipPosition="top start"
//         >
//           {{ item | aclLabel: 'name':'alert' }}
//         </a>
//       </aui-table-cell>
//     </ng-container>
//    <aui-table-header-row
//       *auiTableHeaderRowDef="columns"
//     ></aui-table-header-row>
//     <aui-table-row *auiTableRowDef="let row; columns: columns"></aui-table-row>
//  </aui-table>
