import { Component, OnInit } from '@angular/core';
import { ExpenseRecord } from '../type';
import { of } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';

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
  seriesGroups: any[] = [
    {
      type: 'pie',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          labelRadius: 120,
          initialAngle: 15,
          radius: 170,
          centerOffset: 0,
          formatSettings: { sufix: '%', decimalPlaces: 1 },
        },
      ],
    },
  ];
  source = {
    datatype: 'csv',
    datafields: [{ name: 'Browser' }, { name: 'Share' }],
  };
  dataAdapter: any = new jqx.dataAdapter(this.source, {
    async: false,
    autoBind: true,
  });
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
  constructor() {}

  ngOnInit() {}
}
