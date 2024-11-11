import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm: FormGroup = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.getRawValue();
      console.log('Username:', username, 'Password:', password);
      // Insira a lógica de autenticação aqui, como uma chamada HTTP
    } else {
      console.log('Formulário inválido');
    }
  }
}
