import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnDefComponent } from './table-column-def.component';

describe('TableColumnDefComponent', () => {
  let component: TableColumnDefComponent;
  let fixture: ComponentFixture<TableColumnDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColumnDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColumnDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
