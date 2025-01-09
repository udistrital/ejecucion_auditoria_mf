import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditoriasExternasComponent } from './components/auditorias-externas/auditorias-externas.component';
import { SeguimientoInformesComponent } from './components/seguimiento-informes/seguimiento-informes.component';
import { AuditoriasInternasComponent } from './components/auditorias-internas/auditorias-internas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EjecucionRoutingModule } from './ejecucion-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';



@NgModule({
  declarations: [
    AuditoriasExternasComponent,
    SeguimientoInformesComponent,
    AuditoriasInternasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EjecucionRoutingModule,
    MaterialModule
  ]
})
export class EjecucionModule { }
