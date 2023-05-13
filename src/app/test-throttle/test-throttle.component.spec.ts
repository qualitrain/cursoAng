import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThrottleComponent } from './test-throttle.component';

describe('TestThrottleComponent', () => {
  let component: TestThrottleComponent;
  let fixture: ComponentFixture<TestThrottleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestThrottleComponent]
    });
    fixture = TestBed.createComponent(TestThrottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
