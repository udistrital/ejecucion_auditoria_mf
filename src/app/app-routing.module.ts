import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditoriasInternasComponent } from './modules/auditorias-internas/auditorias-internas.component';

import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: "auditorias-internas",
    component: AuditoriasInternasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/ejecucion-auditoria/'}],
})
export class AppRoutingModule { }
