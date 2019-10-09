import { Route } from '@angular/router';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { FinanceMainComponent } from './finance/main-view/finance-main/finance-main.component';

interface RouteInfo extends Route {
  title?: string;
  barTitle?: string;
}

export const RouteConfig: RouteInfo[] = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPanelComponent,
  },
  {
    path: 'finance',
    pathMatch: 'full',
    component: FinanceMainComponent,
  },
];
