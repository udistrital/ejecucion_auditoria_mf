import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { CommonModule } from "@angular/common";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CargarArchivoComponent } from "./elements/components/cargar-archivo/cargar-archivo.component";
import { FormularioDinamicoComponent } from "./elements/components/formulario-dinamico/formulario-dinamico.component";
import { PlantillaTarjetaContenedoraComponent } from "./elements/templates/plantilla-tarjeta-contenedora/plantilla-tarjeta-contenedora.component";
import { PlantillaModalComponent } from "./elements/templates/plantilla-modal/plantilla-modal.component";
import { ModalVerDocumentoComponent } from "./elements/components/dialogs/modal-ver-documento/modal-ver-documento.component";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { CustomPaginadorIntl } from "./services/custom-paginador.service";

@NgModule({
  declarations: [
    FormularioDinamicoComponent,
    CargarArchivoComponent,
    ModalVerDocumentoComponent,
    PlantillaTarjetaContenedoraComponent,
    PlantillaModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    PdfViewerModule,
  ],
  exports: [
    //Componentes
    CargarArchivoComponent,
    FormularioDinamicoComponent,
    ModalVerDocumentoComponent,
    PlantillaTarjetaContenedoraComponent,
    PlantillaModalComponent,
    //modulos
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    PdfViewerModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatPaginatorIntl, useClass: CustomPaginadorIntl },
  ],
})
export class SharedModule {}
