import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultadorGatosComponent } from './consultador-gatos.component';

describe('ConsultadorGatosComponent', () => {
  let component: ConsultadorGatosComponent;
  let fixture: ComponentFixture<ConsultadorGatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultadorGatosComponent]
    });
    fixture = TestBed.createComponent(ConsultadorGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
