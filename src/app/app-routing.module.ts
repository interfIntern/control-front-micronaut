import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuitesComponent } from './components/catalogs/suites/suites.component';
import { TiposEventosFoliosComponent } from './components/catalogs/tipos-eventos-folios/tipos-eventos-folios.component';
import { FoliosComponent } from './components/catalogs/folios/folios.component';
import { ServersComponent } from './components/catalogs/servers/servers.component';
import { AplicativosComponent } from './components/catalogs/aplicativos/aplicativos.component';
import { LideresComponent } from './components/catalogs/lideres/lideres.component';
import { AmbientesComponent } from './components/catalogs/ambientes/ambientes.component';
import { VersionesComponent } from './components/catalogs/versiones/versiones.component';
import { AmbientesVersionesComponent } from './components/catalogs/ambientes-versiones/ambientes-versiones.component';


const routes: Routes = [
  {
    path: 'catalogs', children: [
      { path: 'suites', component: SuitesComponent },
      { path: 'tipos-eventos-folios', component: TiposEventosFoliosComponent },
      { path: 'folios', component: FoliosComponent },
      { path: 'servers', component: ServersComponent },
      { path: 'aplicativos', component: AplicativosComponent },
      { path: 'lideres', component: LideresComponent },
      { path: 'ambientes', component: AmbientesComponent },
      { path: 'versiones', component: VersionesComponent },
      { path: 'ambientes-versiones', component: AmbientesVersionesComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
