import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-am-dialog',
  templateUrl: './am-dialog.component.html',
  styleUrls: ['./am-dialog.component.scss'],
})
export class AmDialogComponent implements OnInit {
  @ViewChild('bodyTmpl')
  bodyTemplate: ViewContainerRef;
  constructor(
    private componentResolver: ComponentFactoryResolver,
  ) {}
  ngOnInit() {
    // this.bodyTemplate.clear();
    // this.bodyTemplate.createComponent(
    //   this.componentResolver.resolveComponentFactory(this.contentComponent),
    // );
  }
}
