import {
  ApplicationRef,
  Component,
  Injector,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appRef: ApplicationRef;
  title = 'account-manager-app';
  // @ViewChild('container')
  // container: CdkPortalOutlet;
  @ViewChild('portal')
  portal2: TemplateRef<any>;
  @ViewChild('portal')
  portalViewRef: ViewContainerRef;

  @ViewChild('templatePortal') templatePortal: TemplatePortal<any>;
  constructor(private overlay: Overlay, private injector: Injector) {}
  open() {
    const d = new TemplatePortal(this.portal2, this.portalViewRef);
    const overlayRef = this.overlay.create({
      /** Whether the overlay has a backdrop. */
      hasBackdrop: true,
      /** Custom class to add to the backdrop */
      backdropClass: 'backdrop',
      panelClass: 'panel',
    });
    overlayRef.attach(d);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }
}
