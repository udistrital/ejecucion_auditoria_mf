import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";
import { ParametrosService } from "src/app/core/services/parametros.service";
import { PlanAnualAuditoriaMid } from "src/app/core/services/plan-anual-auditoria-mid.service";
import { ImplicitAutenticationService } from "src/app/core/services/implicit_autentication.service";
import { MatTableDataSource } from "@angular/material/table";
import { Parametro } from "src/app/shared/data/models/parametros/parametros";
import { Plan } from "src/app/shared/data/models/plan-anual-auditoria/plan-anual-auditoria";
import { environment } from "src/environments/environment";
import { AlertService } from "src/app/shared/services/alert.service";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-seguimiento-informes',
  templateUrl: './seguimiento-informes.component.html',
  styleUrls: ['./seguimiento-informes.component.css']
})
export class SeguimientoInformesComponent {
  usuarioId: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  total!: number;
  opcionesPagina: number[] = [5, 10, 25];
  offset = 0;

  years: Parametro[] = [];
  selectedYearId: number | null = null;

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    "no",
    "vigencia",
    "auditoria",
    "auditor",
    "dependencia",
    "lider",
    "responsable",
    "estado",
    "documentos",
    "acciones"
  ];
  
  constructor(
    private alertaService: AlertService,
    private router: Router,
    private parametrosService: ParametrosService,
    private PlanAnualAuditoriaMid: PlanAnualAuditoriaMid,
    private autenticationService: ImplicitAutenticationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.cargarVigencias();
    this.cargarPlanesAuditoria(this.opcionesPagina[0], this.offset);
    this.userService.getPersonaId().then((usuarioId) => {
      this.usuarioId = usuarioId;
    });
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      const limit = this.paginator.pageSize;
      this.offset = this.paginator.pageIndex * limit;
      this.cargarPlanesAuditoria(limit, this.offset);
    });
  }


  iniciarPaginacion() {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = this.opcionesPagina[0];
    this.offset = 0;
  }


  cargarVigencias() {
    this.parametrosService
      .get(
        "parametro?query=TipoParametroId:121&fields=Id,Nombre&limit=0&sortby=nombre&order=desc"
      )
      .subscribe((res) => {
        if (res !== null) {
          this.years = res.Data;
        } else {
          console.warn("vigencias no encontradas");
        }
      });
  }

  cargarPlanesAuditoria(limit: number, offset: number) {
    this.PlanAnualAuditoriaMid.get(
      `auditoria?query=&limit=${limit}&offset=${offset}`
    ).subscribe(
      (res) => {
        if (res && res.Data) {
          this.dataSource.data = res.Data.map((item: any, index: number) => ({
            id: item._id,
            vigencia: item.vigencia_nombre ?? "No encontrada",
            auditoria: item.titulo ?? "Sin título",
            auditor: item.auditor ?? "Sin asignar",
            dependencia: item.dependencia ?? "No especificada",
            lider: item.lider ?? "No asignado",
            responsable: item.responsable ?? "No asignado",
            estado: item.estado ?? "No definido",
            documentos: item.documentos ?? []
          }));
          this.total = res.MetaData.Count;
        }
      },
      (error) => {
        this.alertaService.showErrorAlert(
          "Error al cargar los planes de auditoría"
        );
      }
    );
  }


  editarInforme(element: any) {
    // this.router.navigate([`/auditoria/editar/`, element.id]);
  }

  enviarAprobacion(element: any) {
    // this.router.navigate([`/auditoria/aprobacion/`, element.id]);
  }
}
