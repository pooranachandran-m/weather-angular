import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityTableComponent } from './air-quality-table.component';

describe('AirQualityTableComponent', () => {
  let component: AirQualityTableComponent;
  let fixture: ComponentFixture<AirQualityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirQualityTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirQualityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
