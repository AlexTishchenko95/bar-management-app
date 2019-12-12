import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTableComponent } from './bar-table.component';

describe('BarTableComponent', () => {
  let component: BarTableComponent;
  let fixture: ComponentFixture<BarTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
