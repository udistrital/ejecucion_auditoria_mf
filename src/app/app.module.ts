import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditoriasInternasComponent } from './modules/auditorias-internas/auditorias-internas.component';

import { AuditoriasInternasModule } from './modules/auditorias-internas/auditorias-internas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuditoriasInternasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
