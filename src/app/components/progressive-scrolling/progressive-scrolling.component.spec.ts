import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveScrollingComponent } from './progressive-scrolling.component';

describe('ProgressiveScrollingComponent', () => {
  let component: ProgressiveScrollingComponent;
  let fixture: ComponentFixture<ProgressiveScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressiveScrollingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressiveScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
