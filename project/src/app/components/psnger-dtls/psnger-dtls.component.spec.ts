import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsngerDtlsComponent } from './psnger-dtls.component';

describe('PsngerDtlsComponent', () => {
  let component: PsngerDtlsComponent;
  let fixture: ComponentFixture<PsngerDtlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsngerDtlsComponent]
    });
    fixture = TestBed.createComponent(PsngerDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
