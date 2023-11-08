import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancechartComponent } from './financechart.component';

describe('FinancechartComponent', () => {
  let component: FinancechartComponent;
  let fixture: ComponentFixture<FinancechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancechartComponent]
    });
    fixture = TestBed.createComponent(FinancechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
