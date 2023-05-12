import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestErroresComponent } from './test-errores.component';

describe('TestErroresComponent', () => {
  let component: TestErroresComponent;
  let fixture: ComponentFixture<TestErroresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestErroresComponent]
    });
    fixture = TestBed.createComponent(TestErroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
