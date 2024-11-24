import { TestBed } from '@angular/core/testing';

import { ReservaAdmService } from './reserva-adm.service';

describe('ReservaAdmService', () => {
  let service: ReservaAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
