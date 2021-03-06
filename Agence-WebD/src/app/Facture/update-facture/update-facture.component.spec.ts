import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFactureComponent } from './update-facture.component';

describe('UpdateAeroComponent', () => {
  let component: UpdateFactureComponent;
  let fixture: ComponentFixture<UpdateFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
