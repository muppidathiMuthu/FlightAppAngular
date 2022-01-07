import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinelistingComponent } from './airlinelisting.component';

describe('AirlinelistingComponent', () => {
  let component: AirlinelistingComponent;
  let fixture: ComponentFixture<AirlinelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinelistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
