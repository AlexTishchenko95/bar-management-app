import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreasePositionDialogComponent } from './increase-position-dialog.component';

describe('IncreasePositionDialogComponent', () => {
  let component: IncreasePositionDialogComponent;
  let fixture: ComponentFixture<IncreasePositionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreasePositionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreasePositionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
