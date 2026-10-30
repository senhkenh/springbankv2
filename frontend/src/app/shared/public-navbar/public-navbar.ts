import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './public-navbar.html',
  styleUrl: './public-navbar.scss'
})
export class PublicNavbar {
  menuOpen = false;

  navItems = [
    { label: 'Personas',    link: '/' },
    { label: 'Empresas',    link: '/empresa' },
    { label: 'Tarjetas',    link: '/tarjetas' },
    { label: 'Créditos',    link: '/creditos' },
    { label: 'Inversiones', link: '/inversiones' },
    { label: 'Seguros',     link: '/seguros' },
  ];
}
