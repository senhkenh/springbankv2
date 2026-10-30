import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PublicNavbar } from '../../shared/public-navbar/public-navbar';
import { PublicFooter } from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-creditos',
  imports: [CommonModule, FormsModule, RouterLink, PublicNavbar, PublicFooter],
  templateUrl: './creditos.html',
  styleUrl: './creditos.scss'
})
export class Creditos {
  creditos = [
    { icon: 'fa-solid fa-hand-holding-dollar', title: 'Crédito de Consumo', tasa: 'Desde 0,89%', plazo: 'Hasta 72 meses', monto: 'Hasta $30.000.000', desc: 'Para lo que necesites: viajes, estudios, remodelaciones o imprevistos.', color: '#0029FF', bg: '#eef1ff' },
    { icon: 'fa-solid fa-house', title: 'Crédito Hipotecario', tasa: 'Desde 3,5% anual', plazo: 'Hasta 30 años', monto: 'Hasta el 90% del valor', desc: 'Financia la compra, construcción o ampliación de tu vivienda.', color: '#16a34a', bg: '#dcfce7' },
    { icon: 'fa-solid fa-graduation-cap', title: 'Crédito Educacional', tasa: 'Desde 0,5%', plazo: 'Hasta 10 años', monto: 'Hasta $15.000.000', desc: 'Financia tu carrera o posgrado con condiciones especiales para estudiantes.', color: '#7c3aed', bg: '#f3e8ff' },
    { icon: 'fa-solid fa-car', title: 'Crédito Automotriz', tasa: 'Desde 0,79%', plazo: 'Hasta 60 meses', monto: 'Hasta $25.000.000', desc: 'Compra tu auto nuevo o usado con las mejores tasas del mercado.', color: '#d97706', bg: '#fef3c7' },
  ];

  // Simulador
  monto = 5000000;
  plazo = 24;
  tasa = 0.0089;

  get cuota() {
    const r = this.tasa;
    const n = this.plazo;
    const p = this.monto;
    return Math.round(p * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1));
  }

  get totalPagar() { return this.cuota * this.plazo; }
  get totalIntereses() { return this.totalPagar - this.monto; }

  requisitos = [
    { icon: 'fa-solid fa-id-card', title: 'Cédula de identidad vigente', desc: 'Documento de identidad chileno o extranjero con residencia definitiva.' },
    { icon: 'fa-solid fa-file-invoice', title: 'Últimas 3 liquidaciones de sueldo', desc: 'O declaración de renta para trabajadores independientes.' },
    { icon: 'fa-solid fa-building-columns', title: 'Ser cliente SpringBank', desc: 'Tener cuenta corriente o vista activa con al menos 3 meses de antigüedad.' },
    { icon: 'fa-solid fa-chart-bar', title: 'Buen historial crediticio', desc: 'Sin deudas morosas en el sistema financiero al momento de la solicitud.' },
  ];
}
