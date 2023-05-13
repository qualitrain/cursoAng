import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerMergeComponent } from './ejer-merge.component';

describe('EjerMergeComponent', () => {
  let component: EjerMergeComponent;
  let fixture: ComponentFixture<EjerMergeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjerMergeComponent]
    });
    fixture = TestBed.createComponent(EjerMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
