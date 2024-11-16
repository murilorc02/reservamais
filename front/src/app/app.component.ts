import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HorariosAlunoComponent } from './components/horarios-aluno/horarios-aluno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, HeaderComponent, HomeComponent, HorariosAlunoComponent],
  template: `
  <app-header/>
  <!-- <app-login/> -->
  <app-home/>
  <app-horarios-aluno/>
  `, // Carrega o LoginComponent
})
export class AppComponent {}