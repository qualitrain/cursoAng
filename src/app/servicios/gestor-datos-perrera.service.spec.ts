import { TestBed } from '@angular/core/testing';

import { GestorDatosPerreraService } from './gestor-datos-perrera.service';

describe('GestorDatosPerreraService', () => {
  let service: GestorDatosPerreraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorDatosPerreraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
