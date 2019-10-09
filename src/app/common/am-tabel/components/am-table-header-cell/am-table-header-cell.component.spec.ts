import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmTableHeaderCellComponent } from './am-table-header-cell.component';

describe('AmTableHeaderCellComponent', () => {
  let component: AmTableHeaderCellComponent;
  let fixture: ComponentFixture<AmTableHeaderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmTableHeaderCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmTableHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
