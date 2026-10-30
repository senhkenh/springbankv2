import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PublicNavbar } from '../../shared/public-navbar/public-navbar';
import { PublicFooter } from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-seguros',
  imports: [CommonModule, RouterLink, PublicNavbar, PublicFooter],
  templateUrl: './seguros.html',
  styleUrl: './seguros.scss'
})
export class Seguros {
  seguros = [
    { icon: 'fa-solid fa-heart-pulse', title: 'Seguro de Vida', precio: 'Desde $4.990/mes', desc: 'Protege a tu familia con una cobertura de hasta $100.000.000 en caso de fallecimiento o invalidez total.', coberturas: ['Fallecimiento por cualquier causa', 'Invalidez total y permanente', 'Enfermedades graves', 'Asistencia funeraria'], color: '#dc2626', bg: '#fee2e2' },
    { icon: 'fa-solid fa-house-chimney', title: 'Seguro de Hogar', precio: 'Desde $7.990/mes', desc: 'Cubre tu vivienda y contenido contra incendio, robo, daños por agua y catástrofes naturales.', coberturas: ['Incendio y explosión', 'Robo y hurto', 'Daños por agua', 'Terremoto y maremoto'], color: '#d97706', bg: '#fef3c7' },
    { icon: 'fa-solid fa-car', title: 'Seguro Automotriz', precio: 'Desde $19.990/mes', desc: 'Cobertura completa para tu vehículo con asistencia en ruta 24/7 y auto de reemplazo.', coberturas: ['Daños propios', 'Responsabilidad civil', 'Robo total y parcial', 'Asistencia en ruta 24/7'], color: '#0029FF', bg: '#eef1ff' },
    { icon: 'fa-solid fa-plane', title: 'Seguro de Viaje', precio: 'Desde $2.990/viaje', desc: 'Viaja tranquilo con cobertura médica internacional, pérdida de equipaje y cancelación de vuelos.', coberturas: ['Gastos médicos en el exterior', 'Pérdida de equipaje', 'Cancelación de viaje', 'Repatriación'], color: '#16a34a', bg: '#dcfce7' },
    { icon: 'fa-solid fa-briefcase', title: 'Seguro de Desempleo', precio: 'Desde $3.490/mes', desc: 'Protege tus compromisos financieros en caso de pérdida involuntaria de empleo.', coberturas: ['Pago de cuotas de crédito', 'Hasta 6 meses de cobertura', 'Activación inmediata', 'Sin período de carencia'], color: '#7c3aed', bg: '#f3e8ff' },
    { icon: 'fa-solid fa-shield-halved', title: 'Seguro de Desgravamen', precio: 'Incluido en créditos', desc: 'Cubre el saldo de tu crédito en caso de fallecimiento o invalidez, protegiendo a tu familia.', coberturas: ['Fallecimiento del titular', 'Invalidez total', 'Cobertura del 100% del saldo', 'Sin costo adicional en créditos'], color: '#0284c7', bg: '#e0f2fe' },
  ];
}
