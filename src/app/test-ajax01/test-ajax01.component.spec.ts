import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAjax01Component } from './test-ajax01.component';

describe('TestAjax01Component', () => {
  let component: TestAjax01Component;
  let fixture: ComponentFixture<TestAjax01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAjax01Component]
    });
    fixture = TestBed.createComponent(TestAjax01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
