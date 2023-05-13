import { TestBed } from '@angular/core/testing';

import { GestorDatosService } from './gestor-datos.service';

describe('GestorDatosService', () => {
  let service: GestorDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
