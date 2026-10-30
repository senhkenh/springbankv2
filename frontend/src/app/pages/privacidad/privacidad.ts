import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublicNavbar } from '../../shared/public-navbar/public-navbar';
import { PublicFooter } from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-privacidad',
  imports: [RouterLink, PublicNavbar, PublicFooter],
  templateUrl: './privacidad.html',
  styleUrl: './privacidad.scss'
})
export class Privacidad {
  lastUpdate = '15 de enero de 2025';
}
