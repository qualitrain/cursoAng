import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCombinaObs02Component } from './test-combina-obs02.component';

describe('TestCombinaObs02Component', () => {
  let component: TestCombinaObs02Component;
  let fixture: ComponentFixture<TestCombinaObs02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCombinaObs02Component]
    });
    fixture = TestBed.createComponent(TestCombinaObs02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
