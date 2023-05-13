import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerTakeUltilComponent } from './ejer-take-ultil.component';

describe('EjerTakeUltilComponent', () => {
  let component: EjerTakeUltilComponent;
  let fixture: ComponentFixture<EjerTakeUltilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjerTakeUltilComponent]
    });
    fixture = TestBed.createComponent(EjerTakeUltilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
