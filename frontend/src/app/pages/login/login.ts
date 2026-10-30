import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username = '';
  password = '';
  error = '';
  showPass = false;
  remember = false;
  loading = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (!this.username || !this.password) {
      this.error = 'Por favor ingresa tu usuario y contraseña.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.error = response.message || 'Error de autenticación';
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Error al conectar con el servidor';
      }
    });
  }
}
