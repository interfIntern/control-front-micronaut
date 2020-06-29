import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {NavService} from '../../services/nav.service';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: 'Catalogos',
      iconName: 'recent_actors',
      route: 'catalogs',
      children: [
        {
          displayName: 'Suites',
          iconName: 'group',
          route: 'catalogs/suites'
        },
        {
          displayName: 'Tipos eventos folios',
          iconName: 'group',
          route: 'catalogs/tipos-eventos-folios'
        },
        {
          displayName: 'Folios',
          iconName: 'group',
          route: 'catalogs/folios'
        },
        {
          displayName: 'Servidores',
          iconName: 'group',
          route: 'catalogs/servers'
        },
        {
          displayName: 'Aplicativos',
          iconName: 'group',
          route: 'catalogs/aplicativos'
        },
        {
          displayName: 'Lideres',
          iconName: 'group',
          route: 'catalogs/lideres'
        },{
          displayName: 'Ambientes',
          iconName: 'group',
          route: 'catalogs/ambientes'
        },
        {
          displayName: 'Versiones',
          iconName: 'group',
          route: 'catalogs/versiones'
        },{
          displayName: 'Ambientes Versiones',
          iconName: 'group',
          route: 'catalogs/ambientes-versiones'
        }]
      }];
      
  constructor(public navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}
