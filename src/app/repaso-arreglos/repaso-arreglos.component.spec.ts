import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasoArreglosComponent } from './repaso-arreglos.component';

describe('RepasoArreglosComponent', () => {
  let component: RepasoArreglosComponent;
  let fixture: ComponentFixture<RepasoArreglosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepasoArreglosComponent]
    });
    fixture = TestBed.createComponent(RepasoArreglosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
