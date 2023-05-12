import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIntervalComponent } from './test-interval.component';

describe('TestIntervalComponent', () => {
  let component: TestIntervalComponent;
  let fixture: ComponentFixture<TestIntervalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestIntervalComponent]
    });
    fixture = TestBed.createComponent(TestIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
