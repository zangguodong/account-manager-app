import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import {
  ComponentPortal,
  ComponentType,
  DomPortalOutlet,
  PortalOutlet,
} from '@angular/cdk/portal';
import { AmDialogComponent } from './am-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AmDialogService {
  portalOutlet: PortalOutlet;
  appRef: ApplicationRef;
  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
  ) {}
  openDialog(component: ComponentType<any>) {
    let outContainer = document.createElement('div');
    outContainer.classList.add('dialog-portal');
    outContainer = document.body.appendChild(outContainer);
    const container = this.resolver.resolveComponentFactory(AmDialogComponent);
    if (!this.appRef) {
      this.appRef = this.injector.get(ApplicationRef);
    }
    this.portalOutlet = new DomPortalOutlet(
      outContainer,
      this.resolver,
      this.appRef,
      this.injector,
    );
    const componentPortal = new ComponentPortal(component);
    this.portalOutlet.attach(componentPortal);
  }
}
