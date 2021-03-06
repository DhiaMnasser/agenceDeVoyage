import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReservationComponent } from './detail-reservation.component';

describe('DetailAeroComponent', () => {
  let component: DetailReservationComponent;
  let fixture: ComponentFixture<DetailReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
