/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmbientesVersionesComponent } from './ambientes-versiones.component';

describe('AmbientesVersionesComponent', () => {
  let component: AmbientesVersionesComponent;
  let fixture: ComponentFixture<AmbientesVersionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbientesVersionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientesVersionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
