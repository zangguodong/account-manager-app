import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmTableHeaderRowComponent } from './am-table-header-row.component';

describe('AmTableHeaderRowComponent', () => {
  let component: AmTableHeaderRowComponent;
  let fixture: ComponentFixture<AmTableHeaderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmTableHeaderRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmTableHeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
