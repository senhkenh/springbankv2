import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PublicNavbar } from '../../shared/public-navbar/public-navbar';
import { PublicFooter } from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-tarjetas',
  imports: [CommonModule, RouterLink, PublicNavbar, PublicFooter],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.scss'
})
export class Tarjetas {
  tarjetas = [
    {
      nombre: 'SpringBank Classic', tipo: 'Visa Clásica', color: '#1a1a2e',
      cuotas: '24', cashback: '0.5%', anualidad: '$0 primer año',
      beneficios: ['Sin anualidad el primer año', 'Compras en cuotas sin interés', 'Seguro de compras incluido', 'Acceso a descuentos exclusivos'],
      destacada: false
    },
    {
      nombre: 'SpringBank Gold', tipo: 'Visa Gold', color: '#0029FF',
      cuotas: '36', cashback: '1%', anualidad: '$9.990/mes',
      beneficios: ['CashBack 1% en todas las compras', 'Hasta 36 cuotas sin interés', 'Seguro de viaje incluido', 'Acceso a salas VIP aeropuertos', 'Concierge 24/7'],
      destacada: true
    },
    {
      nombre: 'SpringBank Platinum', tipo: 'Visa Platinum', color: '#374151',
      cuotas: '48', cashback: '2%', anualidad: '$19.990/mes',
      beneficios: ['CashBack 2% en todas las compras', 'Hasta 48 cuotas sin interés', 'Seguro de viaje premium', 'Acceso ilimitado salas VIP', 'Concierge 24/7', 'Seguro de vida incluido'],
      destacada: false
    },
  ];

  beneficios = [
    { icon: 'fa-solid fa-shield-halved', title: 'Compra protegida', desc: 'Todas tus compras están protegidas contra robo, daño o no entrega por hasta 90 días.' },
    { icon: 'fa-solid fa-plane', title: 'Seguro de viaje', desc: 'Cobertura médica internacional, pérdida de equipaje y cancelación de vuelos.' },
    { icon: 'fa-solid fa-percent', title: 'CashBack automático', desc: 'Recibe un porcentaje de tus compras de vuelta en tu cuenta cada mes.' },
    { icon: 'fa-solid fa-lock', title: 'Seguridad avanzada', desc: 'Tecnología chip EMV, tokenización y alertas en tiempo real para cada transacción.' },
    { icon: 'fa-solid fa-globe', title: 'Aceptación mundial', desc: 'Usa tu tarjeta en más de 200 países y 46 millones de comercios en todo el mundo.' },
    { icon: 'fa-solid fa-headset', title: 'Soporte 24/7', desc: 'Bloqueo inmediato, reposición de emergencia y atención personalizada las 24 horas.' },
  ];

  faqs = [
    { q: '¿Cómo solicito mi tarjeta?', a: 'Puedes solicitarla 100% en línea desde nuestra app o sitio web. El proceso toma menos de 5 minutos y recibirás respuesta en 24 horas hábiles.' },
    { q: '¿Cuándo llega mi tarjeta?', a: 'Una vez aprobada, recibirás tu tarjeta física en tu domicilio en un plazo de 5 a 7 días hábiles. Mientras tanto, puedes usar tu tarjeta digital inmediatamente.' },
    { q: '¿Cómo funciona el CashBack?', a: 'El CashBack se calcula sobre el monto total de tus compras del mes y se abona automáticamente en tu cuenta corriente el primer día hábil del mes siguiente.' },
    { q: '¿Puedo bloquear mi tarjeta desde la app?', a: 'Sí. Desde la app SpringBank puedes bloquear y desbloquear tu tarjeta en tiempo real, sin necesidad de llamar al banco.' },
  ];

  faqAbierto: number | null = null;
  toggle(i: number) { this.faqAbierto = this.faqAbierto === i ? null : i; }
}
