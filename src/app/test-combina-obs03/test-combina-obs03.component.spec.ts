import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCombinaObs03Component } from './test-combina-obs03.component';

describe('TestCombinaObs03Component', () => {
  let component: TestCombinaObs03Component;
  let fixture: ComponentFixture<TestCombinaObs03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCombinaObs03Component]
    });
    fixture = TestBed.createComponent(TestCombinaObs03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
