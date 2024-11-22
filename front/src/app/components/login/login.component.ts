import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { login, senha } = this.loginForm.value;
      this.authService.authenticate(login, senha).subscribe({
        next: (response) => {
          this.authService.setToken(response.token); // Salva o token de autenticação
          this.router.navigate(['/home']); // Redireciona para a home
        },
        error: (error) => {
          console.error('Erro ao autenticar', error);
        },
      });
    }
  }

}
