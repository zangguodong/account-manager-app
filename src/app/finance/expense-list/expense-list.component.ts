import { Component, OnInit } from '@angular/core';
import { ExpenseRecord } from '../type';
import { of } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { AmDialogService } from '../../common/am-dialog/am-dialog.service';
import { MainPanelComponent } from '../../main-panel/main-panel.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
  mockData: ExpenseRecord[] = [
    {
      amount: 100,
      unit: '元',
      useType: '吃饭',
    },
    {
      amount: 300,
      unit: '元',
      useType: '吃饭',
    },
    {
      amount: 1120,
      unit: '元',
      useType: '吃饭',
    },
  ];
  totalUsedMonth$ = of(this.mockData).pipe(
    map(records => {
      return records.reduce((totalAmount, item) => {
        totalAmount += item.amount;
        return totalAmount;
      }, 0);
    }),
    publishReplay(1),
    refCount(),
  );
  colDefMock = ['amount', 'unit', 'useType'];
  calcRatio(total: number) {
    return total / 5000;
  }
  constructor(private amDialog: AmDialogService) {}
  addRecord() {
    this.amDialog.openDialog(MainPanelComponent);
  }
  ngOnInit() {}
}
