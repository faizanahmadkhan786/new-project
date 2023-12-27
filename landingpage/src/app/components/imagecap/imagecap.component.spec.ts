import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecapComponent } from './imagecap.component';

describe('ImagecapComponent', () => {
  let component: ImagecapComponent;
  let fixture: ComponentFixture<ImagecapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagecapComponent]
    });
    fixture = TestBed.createComponent(ImagecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
