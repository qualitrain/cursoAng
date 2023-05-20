import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCombinaObsComponent } from './test-combina-obs.component';

describe('TestCombinaObsComponent', () => {
  let component: TestCombinaObsComponent;
  let fixture: ComponentFixture<TestCombinaObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCombinaObsComponent]
    });
    fixture = TestBed.createComponent(TestCombinaObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
