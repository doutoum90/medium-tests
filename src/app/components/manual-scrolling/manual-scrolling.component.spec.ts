import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualScrollingComponent } from './manual-scrolling.component';

describe('ManualScrollingComponent', () => {
  let component: ManualScrollingComponent;
  let fixture: ComponentFixture<ManualScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualScrollingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
