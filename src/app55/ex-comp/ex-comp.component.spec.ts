/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExCompComponent } from './ex-comp.component';

describe('ExCompComponent', () => {
  let component: ExCompComponent;
  let fixture: ComponentFixture<ExCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
