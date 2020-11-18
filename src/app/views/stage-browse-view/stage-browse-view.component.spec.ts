/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StageBrowseViewComponent } from './stage-browse-view.component';

describe('StageBrowseViewComponent', () => {
  let component: StageBrowseViewComponent;
  let fixture: ComponentFixture<StageBrowseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageBrowseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageBrowseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
