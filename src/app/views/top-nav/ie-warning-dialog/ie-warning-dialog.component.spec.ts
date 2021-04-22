import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IeWarningDialogComponent } from './ie-warning-dialog.component';

describe('IeWarningDialogComponent', () => {
  let component: IeWarningDialogComponent;
  let fixture: ComponentFixture<IeWarningDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeWarningDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IeWarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
