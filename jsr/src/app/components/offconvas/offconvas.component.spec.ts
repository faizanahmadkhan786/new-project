import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffconvasComponent } from './offconvas.component';

describe('OffconvasComponent', () => {
  let component: OffconvasComponent;
  let fixture: ComponentFixture<OffconvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffconvasComponent]
    });
    fixture = TestBed.createComponent(OffconvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
