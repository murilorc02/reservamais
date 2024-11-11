import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicoesAlunoComponent } from './instituicoes-aluno.component';

describe('InstituicoesAlunoComponent', () => {
  let component: InstituicoesAlunoComponent;
  let fixture: ComponentFixture<InstituicoesAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituicoesAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituicoesAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
