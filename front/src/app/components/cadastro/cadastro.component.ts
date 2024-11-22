import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      login: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      funcao: ['', Validators.required],
      regmatricula: ['', Validators.required],
      nascimento: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      const newUser = this.registerForm.value;

      this.authService.register(newUser).subscribe({
        next: () => {
          console.log('Usuário cadastrado com sucesso');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar usuário', err);
        },
      });
    }
  }

}
