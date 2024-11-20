import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <!-- <app-login></app-login> -->
    <app-home></app-home>
    <app-horarios-aluno></app-horarios-aluno>
  `,
})
export class AppComponent {
  // A lógica do componente vai aqui (se houver)
}
