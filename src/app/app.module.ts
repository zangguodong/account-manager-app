import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { FinanceMainComponent } from './finance/main-view/finance-main/finance-main.component';
import { ExpenseListComponent } from './finance/expense-list/expense-list.component';
import { AmTabelComponent } from './common/am-tabel/am-tabel.component';
import { AmTableCellDirective } from './common/am-table-cell.directive';
import { AmButtonDirective } from './common/am-button.directive';
import { AmTableHeaderCellComponent } from './common/am-tabel/components/am-table-header-cell/am-table-header-cell.component';
import { AmTableCellComponent } from './common/am-tabel/components/am-table-cell/am-table-cell.component';
import { AmTableHeaderRowComponent } from './common/am-tabel/components/am-table-header-row/am-table-header-row.component';
import { AmTableRowComponent } from './common/am-tabel/components/am-table-row/am-table-row.component';
import { HeaderContentRowDirective } from './common/am-tabel/directives/header-content-row.directive';
import { TableHeaderRowDefDirective } from './common/am-tabel/directives/table-header-row-def.directive';
import { TableHeaderCellDefDirective } from './common/am-tabel/directives/table-header-cell-def.directive';
import { TableColumnDefComponent } from './common/am-tabel/directives/table-column-def/table-column-def.component';
import { TableColumnDefDirective } from './common/am-tabel/directives/table-column-def.directive';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexModule } from '@angular/flex-layout';
import { RadiusPanelComponent } from './common/am-tabel/components/radius-panel/radius-panel.component';
import { LinePanelComponent } from './common/am-tabel/components/line-panel/line-panel.component';
import { PurePipe } from './common/pipes/pure.pipe';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { AmDialogComponent } from './common/am-dialog/am-dialog.component';
import { CdkPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    FinanceMainComponent,
    ExpenseListComponent,
    AmTabelComponent,
    AmTableCellDirective,
    AmButtonDirective,
    AmTableHeaderCellComponent,
    AmTableCellComponent,
    AmTableHeaderRowComponent,
    AmTableRowComponent,
    HeaderContentRowDirective,
    TableHeaderRowDefDirective,
    TableHeaderCellDefDirective,
    TableColumnDefComponent,
    TableColumnDefDirective,
    RadiusPanelComponent,
    LinePanelComponent,
    PurePipe,
    AmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkTableModule,
    FlexModule,
    jqxChartModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
