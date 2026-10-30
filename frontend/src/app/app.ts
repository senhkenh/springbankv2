import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  template: `
    <app-navbar *ngIf="showBankingNav" />
    <router-outlet />
  `
})
export class App {
  constructor(private router: Router) {}

  get showBankingNav() {
    const bankingRoutes = ['/dashboard', '/accounts', '/transfer'];
    return bankingRoutes.some(r => this.router.url.startsWith(r));
  }
}
