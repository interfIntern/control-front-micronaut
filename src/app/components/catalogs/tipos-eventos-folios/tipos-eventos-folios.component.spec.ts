/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TiposEventosFoliosComponent } from './tipos-eventos-folios.component';

describe('TiposEventosFoliosComponent', () => {
  let component: TiposEventosFoliosComponent;
  let fixture: ComponentFixture<TiposEventosFoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposEventosFoliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposEventosFoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
