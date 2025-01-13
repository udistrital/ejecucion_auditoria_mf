import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/_guards/auth.guard';

import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: "ejecucion",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/ejecucion/ejecucion.module").then(
        (m) => m.EjecucionModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/ejecucion-auditoria/'}],
})
export class AppRoutingModule { }
