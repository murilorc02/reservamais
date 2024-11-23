import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaAdmComponent } from './reserva-adm.component';

describe('HorariosAlunoComponent', () => {
  let component: ReservaAdmComponent;
  let fixture: ComponentFixture<ReservaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
