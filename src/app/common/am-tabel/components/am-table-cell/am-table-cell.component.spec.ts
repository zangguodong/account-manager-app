import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmTableCellComponent } from './am-table-cell.component';

describe('AmTableCellComponent', () => {
  let component: AmTableCellComponent;
  let fixture: ComponentFixture<AmTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
