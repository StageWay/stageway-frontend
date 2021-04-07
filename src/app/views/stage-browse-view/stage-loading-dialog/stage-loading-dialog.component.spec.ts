import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageLoadingDialogComponent } from './stage-loading-dialog.component';

describe('StageLoadingDialogComponent', () => {
  let component: StageLoadingDialogComponent;
  let fixture: ComponentFixture<StageLoadingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageLoadingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageLoadingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
