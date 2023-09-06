import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmisionComponent } from './addmision.component';

describe('AddmisionComponent', () => {
  let component: AddmisionComponent;
  let fixture: ComponentFixture<AddmisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmisionComponent]
    });
    fixture = TestBed.createComponent(AddmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
