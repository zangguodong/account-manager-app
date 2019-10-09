import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmTableRowComponent } from './am-table-row.component';

describe('AmTableRowComponent', () => {
  let component: AmTableRowComponent;
  let fixture: ComponentFixture<AmTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
