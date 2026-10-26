import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';
  error = '';
  showPass = false;
  remember = false;

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Por favor ingresa tu correo y contraseña.';
    }
  }
}
