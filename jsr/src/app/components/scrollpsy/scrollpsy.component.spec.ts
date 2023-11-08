import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollpsyComponent } from './scrollpsy.component';

describe('ScrollpsyComponent', () => {
  let component: ScrollpsyComponent;
  let fixture: ComponentFixture<ScrollpsyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollpsyComponent]
    });
    fixture = TestBed.createComponent(ScrollpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
