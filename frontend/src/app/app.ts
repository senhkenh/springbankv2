import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  template: `
    <app-navbar *ngIf="showSharedNav" />
    <router-outlet />
  `
})
export class App {
  constructor(private router: Router) {}

  get showSharedNav() {
    const url = this.router.url;
    return url !== '/' && url !== '' && !url.startsWith('/login');
  }
}
