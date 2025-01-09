import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuditoriasExternasComponent } from "./components/auditorias-externas/auditorias-externas.component";
import { AuditoriasInternasComponent } from "./components/auditorias-internas/auditorias-internas.component";
import { SeguimientoInformesComponent } from "./components/seguimiento-informes/seguimiento-informes.component";

const routes: Routes = [
    {
      path: "auditorias-externas",
      component: AuditoriasExternasComponent,
    },
    {
      path: "auditorias-internas",
      component: AuditoriasInternasComponent,
    },
    {
      path: "seguimiento-informes",
      component: SeguimientoInformesComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class EjecucionRoutingModule {}