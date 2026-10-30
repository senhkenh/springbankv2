import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublicNavbar } from '../../shared/public-navbar/public-navbar';
import { PublicFooter } from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-terminos',
  imports: [RouterLink, PublicNavbar, PublicFooter],
  templateUrl: './terminos.html',
  styleUrl: './terminos.scss'
})
export class Terminos {
  lastUpdate = '15 de enero de 2025';
}
