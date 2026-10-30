import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PublicNavbar } from '../../shared/public-navbar/public-navbar';
import { PublicFooter } from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, PublicNavbar, PublicFooter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  quickAccess = [
    { icon: 'fa-solid fa-wallet',       title: 'Cuenta Corriente',  desc: 'Ábrela en 1 minuto',         link: '/' },
    { icon: 'fa-solid fa-credit-card',  title: 'Tarjetas',          desc: 'Hasta 48 cuotas sin interés', link: '/tarjetas' },
    { icon: 'fa-solid fa-hand-holding-dollar', title: 'Créditos',   desc: 'Desde 0,89% mensual',         link: '/creditos' },
    { icon: 'fa-solid fa-chart-line',   title: 'Inversiones',       desc: 'Rentabilidad garantizada',    link: '/inversiones' },
    { icon: 'fa-solid fa-shield-halved',title: 'Seguros',           desc: 'Protege lo que más quieres',  link: '/seguros' },
  ];

  products = [
    {
      icon: 'fa-solid fa-wallet', title: 'Cuenta Corriente Digital',
      desc: 'La cuenta más completa del mercado, sin comisiones el primer año.',
      features: ['Sin costo de mantención 12 meses', 'Tarjeta Visa Débito internacional', 'Transferencias ilimitadas gratis'],
      bg: '#eef1ff', color: '#0029FF', link: '/', cta: 'Abrir cuenta'
    },
    {
      icon: 'fa-solid fa-credit-card', title: 'Tarjeta de Crédito',
      desc: 'Compra ahora y paga como quieras con hasta 48 cuotas sin interés.',
      features: ['Hasta 48 cuotas sin interés', 'CashBack en todas tus compras', 'Seguro de compras incluido'],
      bg: '#fef3c7', color: '#d97706', link: '/tarjetas', cta: 'Solicitar tarjeta'
    },
    {
      icon: 'fa-solid fa-chart-line', title: 'Fondo Mutuo',
      desc: 'Invierte desde $10.000 y obtén rentabilidades superiores al mercado.',
      features: ['Desde $10.000 pesos', 'Liquidez inmediata', 'Sin comisión de entrada'],
      bg: '#dcfce7', color: '#16a34a', link: '/inversiones', cta: 'Invertir ahora'
    },
    {
      icon: 'fa-solid fa-house', title: 'Crédito Hipotecario',
      desc: 'Financia la casa de tus sueños con las mejores condiciones del mercado.',
      features: ['Hasta 30 años plazo', 'Tasa fija o variable', 'Financiamiento hasta 90%'],
      bg: '#f3e8ff', color: '#7c3aed', link: '/creditos', cta: 'Simular crédito'
    },
  ];

  appFeatures = [
    { icon: 'fa-solid fa-bolt',        title: 'Transferencias al instante',  desc: 'Envía dinero en segundos a cualquier banco' },
    { icon: 'fa-solid fa-fingerprint', title: 'Seguridad biométrica',        desc: 'Face ID y huella dactilar para proteger tu cuenta' },
    { icon: 'fa-solid fa-chart-bar',   title: 'Control de gastos',           desc: 'Visualiza tus gastos por categoría en tiempo real' },
    { icon: 'fa-solid fa-bell',        title: 'Alertas en tiempo real',      desc: 'Notificaciones instantáneas de cada movimiento' },
  ];

  testimonials = [
    { text: 'Abrí mi cuenta en menos de 2 minutos desde el celular. La experiencia es increíble y el soporte siempre disponible.', name: 'María González', role: 'Diseñadora, Santiago' },
    { text: 'El crédito hipotecario fue aprobado en 24 horas. El mejor banco con el que he trabajado en mis 15 años de carrera.', name: 'Andrés Soto', role: 'Ingeniero Informático, Valparaíso' },
    { text: 'La app es fantástica. Puedo ver todo en tiempo real y las transferencias son instantáneas. Muy recomendado.', name: 'Camila Rojas', role: 'Emprendedora, Concepción' },
  ];
}
