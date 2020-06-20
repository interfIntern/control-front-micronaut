import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalComponent } from './menu-principal.component';
import { NavService } from 'src/app/services/nav.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuListItemComponent } from '../menu-list-item/menu-list-item.component';
import { MockComponent } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { PrincipalMaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('MenuPrincipalComponent', () => {
  let component: MenuPrincipalComponent;
  let fixture: ComponentFixture<MenuPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        PrincipalMaterialModule
      ],
      declarations: [ MenuPrincipalComponent, MockComponent(MenuListItemComponent)],
      providers: [NavService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create one child component for each child', () => {
    expect(childComponents().length).toEqual(component.navItems.length);
  });

  it('should set child to the name of the child', () => {
    expect(childComponents().map(c => c.item)).toEqual(
      component.navItems
    );
  });

  // helper function to query all the ChildComponents
  function childComponents(): MenuListItemComponent[] {
    return fixture.debugElement
      .queryAll(By.directive(MenuListItemComponent))
      .map(el => el.componentInstance);
  }
});
