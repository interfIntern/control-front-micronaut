/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddEditTipoEventoFolioComponent } from './add-edit-tipo-evento-folio.component';

describe('AddEditTipoEventoFolioComponent', () => {
  let component: AddEditTipoEventoFolioComponent;
  let fixture: ComponentFixture<AddEditTipoEventoFolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTipoEventoFolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTipoEventoFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
