import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientComponent } from './detail-client.component';

describe('DetailAeroComponent', () => {
  let component: DetailClientComponent;
  let fixture: ComponentFixture<DetailClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
