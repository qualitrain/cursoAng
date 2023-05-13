import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerConcatComponent } from './ejer-concat.component';

describe('EjerConcatComponent', () => {
  let component: EjerConcatComponent;
  let fixture: ComponentFixture<EjerConcatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjerConcatComponent]
    });
    fixture = TestBed.createComponent(EjerConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
