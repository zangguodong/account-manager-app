import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-line-panel',
  templateUrl: './line-panel.component.html',
  styleUrls: ['./line-panel.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LinePanelComponent implements OnInit {
  @Input()
  color = 'orange';
  @Input()
  totalLength = 120;
  // tslint:disable-next-line:variable-name
  private _ratio = 0;
  // ratio should be in 0-100
  @Input()
  set ratio(val: number) {
    val = Math.max(val, 0);
    this._ratio = Math.min(val, 1);
  }
  get ratio() {
    return this._ratio * this.totalLength;
  }
  get ratioDisplay() {
    return this.ratio + 'px';
  }
  constructor() {}

  ngOnInit() {}
}
