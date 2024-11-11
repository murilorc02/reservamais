import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosAlunoComponent } from './horarios-aluno.component';

describe('HorariosAlunoComponent', () => {
  let component: HorariosAlunoComponent;
  let fixture: ComponentFixture<HorariosAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
