import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrsnldtlsComponent } from './prsnldtls.component';

describe('PrsnldtlsComponent', () => {
  let component: PrsnldtlsComponent;
  let fixture: ComponentFixture<PrsnldtlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrsnldtlsComponent]
    });
    fixture = TestBed.createComponent(PrsnldtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
