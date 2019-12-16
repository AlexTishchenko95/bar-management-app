import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePositionDialogComponent } from './delete-position-dialog.component';

describe('DeletePositionDialogComponent', () => {
  let component: DeletePositionDialogComponent;
  let fixture: ComponentFixture<DeletePositionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePositionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePositionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
