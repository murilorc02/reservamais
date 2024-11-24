import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './components/login/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-header *ngIf="showHeader"></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  showHeader: boolean;
  constructor(private authService: AuthService, private router: Router) {
    // Inicializa o valor de showHeader com base no estado de login
    this.showHeader = !(this.authService.isLoggedIn() || this.router.url === '/login' || this.router.url === '/cadastro');
  
    // Observa mudanças de navegação e atualiza a visibilidade do header
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))  // Só filtra eventos de navegação concluída
      .subscribe(() => {
        // Verifica se está logado e se a rota atual é de login ou cadastro
        this.showHeader = !(this.authService.isLoggedIn() || this.router.url === '/login' || this.router.url === '/cadastro');
      });
  }
}
