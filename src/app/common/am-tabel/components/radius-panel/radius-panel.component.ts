import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radius-panel',
  templateUrl: './radius-panel.component.html',
  styleUrls: ['./radius-panel.component.scss'],
})
export class RadiusPanelComponent implements OnInit {
  @Input()
  color = 'orange';
  // tslint:disable-next-line:variable-name
  private _ratio = 0;
  // ratio should be in 0-100
  @Input()
  set ratio(val: number) {
    val = Math.max(val, 0);
    this._ratio = Math.min(val, 100);
  }
  get ratio() {
    return this._ratio;
  }
  constructor() {}

  ngOnInit() {}
}
