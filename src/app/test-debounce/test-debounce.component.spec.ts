import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDebounceComponent } from './test-debounce.component';

describe('TestDebounceComponent', () => {
  let component: TestDebounceComponent;
  let fixture: ComponentFixture<TestDebounceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDebounceComponent]
    });
    fixture = TestBed.createComponent(TestDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
