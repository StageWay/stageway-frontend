import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageErrorDialogComponent } from './stage-error-dialog.component';

describe('StageErrorDialogComponent', () => {
  let component: StageErrorDialogComponent;
  let fixture: ComponentFixture<StageErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
