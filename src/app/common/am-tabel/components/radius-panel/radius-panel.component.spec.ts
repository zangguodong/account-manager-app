import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiusPanelComponent } from './radius-panel.component';

describe('RadiusPanelComponent', () => {
  let component: RadiusPanelComponent;
  let fixture: ComponentFixture<RadiusPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiusPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiusPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
