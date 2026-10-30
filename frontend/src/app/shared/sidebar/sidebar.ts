import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  userName = 'Juan Pérez';
  userRut  = '12.345.678-9';
  userInitial = 'J';

  constructor(private router: Router, private authService: AuthService) {
    const stored = authService.getCurrentUser();
    if (stored) {
      this.userRut = stored;
      this.userInitial = stored[0]?.toUpperCase() ?? 'U';
      this.userName = 'Bienvenido';
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
