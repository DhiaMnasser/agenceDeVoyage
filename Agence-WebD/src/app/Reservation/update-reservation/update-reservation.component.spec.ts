import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationComponent } from './update-reservation.component';

describe('UpdateAeroComponent', () => {
  let component: UpdateReservationComponent;
  let fixture: ComponentFixture<UpdateReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
