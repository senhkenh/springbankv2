import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, DecimalPipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  quickProducts = [
    { icon: 'fa-solid fa-wallet', title: 'Cuenta Corriente', desc: 'Ábrela en 1 minuto, sin costo' },
    { icon: 'fa-solid fa-house', title: 'Crédito Hipotecario', desc: 'Financia tu casa ideal' },
    { icon: 'fa-solid fa-chart-pie', title: 'Inversiones', desc: 'Haz crecer tu dinero' },
    { icon: 'fa-solid fa-shield-halved', title: 'Seguros', desc: 'Protege lo que más quieres' },
  ];

  products = [
    {
      icon: 'fa-solid fa-wallet', title: 'Cuenta Corriente Digital', bg: '#e6eaff', color: '#0029FF',
      desc: 'La cuenta más completa del mercado, sin comisiones el primer año.',
      features: ['Sin costo de mantención 12 meses', 'Tarjeta Visa Débito internacional', 'Transferencias ilimitadas gratis', 'App con Face ID'],
      cta: 'Abrir cuenta'
    },
    {
      icon: 'fa-solid fa-credit-card', title: 'Tarjeta de Crédito', bg: '#fef3c7', color: '#d97706',
      desc: 'Compra ahora y paga como quieras con hasta 48 cuotas sin interés.',
      features: ['Hasta 48 cuotas sin interés', 'CashBack en todas tus compras', 'Seguro de compras incluido', 'Acceso a salas VIP'],
      cta: 'Solicitar tarjeta'
    },
    {
      icon: 'fa-solid fa-chart-line', title: 'Fondo Mutuo', bg: '#dcfce7', color: '#16a34a',
      desc: 'Invierte desde $10.000 y obtén rentabilidades superiores al mercado.',
      features: ['Desde $10.000 pesos', 'Liquidez inmediata', 'Sin comisión de entrada', 'Asesoría personalizada'],
      cta: 'Invertir ahora'
    },
  ];

  appFeatures = [
    { icon: 'fa-solid fa-bolt', title: 'Transferencias al instante', desc: 'Envía dinero en segundos a cualquier banco' },
    { icon: 'fa-solid fa-fingerprint', title: 'Seguridad biométrica', desc: 'Face ID y huella dactilar para proteger tu cuenta' },
    { icon: 'fa-solid fa-chart-bar', title: 'Control de gastos', desc: 'Visualiza tus gastos por categoría en tiempo real' },
    { icon: 'fa-solid fa-robot', title: 'Asistente IA', desc: 'Resuelve tus dudas al instante con nuestro bot' },
  ];

  testimonials = [
    { text: 'Abrí mi cuenta en menos de 2 minutos desde el celular. Increíble la experiencia.', name: 'María González', role: 'Diseñadora, Santiago' },
    { text: 'El crédito hipotecario fue aprobado en 24 horas. El mejor banco con el que he trabajado.', name: 'Andrés Soto', role: 'Ingeniero Informático, Valparaíso' },
    { text: 'La app es fantástica, puedo ver todo en tiempo real y las transferencias son instantáneas.', name: 'Camila Rojas', role: 'Emprendedora, Concepción' },
  ];
}
