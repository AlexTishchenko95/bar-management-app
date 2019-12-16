import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreasePositionDialogComponent } from './decrease-position-dialog.component';

describe('DecreasePositionDialogComponent', () => {
  let component: DecreasePositionDialogComponent;
  let fixture: ComponentFixture<DecreasePositionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecreasePositionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreasePositionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
