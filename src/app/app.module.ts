import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { NavService } from './services/nav.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './services/handle-error.service';
import { MessageService } from './services/message.service';
import { PrincipalMaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { SuitesComponent } from './components/catalogs/suites/suites.component';
import { AddSuiteComponent } from './components/catalogs/suites/add-suite/add-suite.component';
import { DeleteComponent } from './components/share/dialogs/delete/delete.component';
import { MessagesComponent } from './components/messages/messages.component';
import { TiposEventosFoliosComponent } from './components/catalogs/tipos-eventos-folios/tipos-eventos-folios.component';
import { AddEditTipoEventoFolioComponent } from './components/catalogs/tipos-eventos-folios/add-edit-tipo-evento-folio/add-edit-tipo-evento-folio.component';
import { FoliosComponent } from './components/catalogs/folios/folios.component';
import { AddEditFolioComponent } from './components/catalogs/folios/add-edit-folio/add-edit-folio.component';
import { ServersComponent } from './components/catalogs/servers/servers.component';
import { AddEditServerComponent } from './components/catalogs/servers/add-edit-server/add-edit-server.component';
import { AddEditAplicativoComponent } from './components/catalogs/aplicativos/add-edit-aplicativo/add-edit-aplicativo.component';
import { AplicativosComponent } from './components/catalogs/aplicativos/aplicativos.component';
import { LideresComponent } from './components/catalogs/lideres/lideres.component';
import { AddEditLiderComponent } from './components/catalogs/lideres/add-edit-lider/add-edit-lider.component';
import { AmbientesComponent } from './components/catalogs/ambientes/ambientes.component';
import { AddEditAmbienteComponent } from './components/catalogs/ambientes/add-edit-ambiente/add-edit-ambiente.component';
import { VersionesComponent } from './components/catalogs/versiones/versiones.component';
import { AddEditVersionComponent } from './components/catalogs/versiones/add-edit-version/add-edit-version.component';
import { AmbientesVersionesComponent } from './components/catalogs/ambientes-versiones/ambientes-versiones.component';
import { AddEditAmbienteVersionComponent } from './components/catalogs/ambientes-versiones/add-edit-ambiente-version/add-edit-ambiente-version.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListItemComponent,
    MenuPrincipalComponent,
    SuitesComponent,
    AddSuiteComponent,
    DeleteComponent,
    MessagesComponent,
    TiposEventosFoliosComponent,
    AddEditTipoEventoFolioComponent,
    FoliosComponent,
    AddEditFolioComponent,
    ServersComponent,
    AddEditServerComponent,
    AplicativosComponent,
    AddEditAplicativoComponent,
    LideresComponent,
    AddEditLiderComponent,
    AmbientesComponent,
    AddEditAmbienteComponent,
    VersionesComponent,
    AddEditVersionComponent,
    AmbientesVersionesComponent,
    AddEditAmbienteVersionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    PrincipalMaterialModule
  ],
  entryComponents: [
    AddSuiteComponent,
    AddEditTipoEventoFolioComponent,
    AddEditFolioComponent,
    AddEditServerComponent,
    AddEditAplicativoComponent,
    AddEditLiderComponent,
    AddEditAmbienteComponent,
    AddEditVersionComponent,
    AddEditAmbienteVersionComponent,
    DeleteComponent
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
