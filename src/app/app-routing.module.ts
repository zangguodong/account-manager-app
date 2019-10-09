import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteConfig } from './route.config';

@NgModule({
  imports: [RouterModule.forRoot(RouteConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
