import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PublicNavbar } from '../../shared/public-navbar/public-navbar';
import { PublicFooter } from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-ayuda',
  imports: [CommonModule, RouterLink, PublicNavbar, PublicFooter],
  templateUrl: './ayuda.html',
  styleUrl: './ayuda.scss'
})
export class Ayuda {
  categorias = [
    { icon: 'fa-solid fa-wallet',       title: 'Cuentas',       desc: 'Apertura, saldos, movimientos y configuración' },
    { icon: 'fa-solid fa-right-left',   title: 'Transferencias',desc: 'Límites, errores y seguimiento' },
    { icon: 'fa-solid fa-credit-card',  title: 'Tarjetas',      desc: 'Bloqueo, reposición y cuotas' },
    { icon: 'fa-solid fa-mobile-screen',title: 'App móvil',     desc: 'Instalación, acceso y funciones' },
    { icon: 'fa-solid fa-lock',         title: 'Seguridad',     desc: 'Contraseñas, fraude y alertas' },
    { icon: 'fa-solid fa-file-invoice', title: 'Créditos',      desc: 'Cuotas, prepago y certificados' },
  ];

  faqs = [
    { cat: 'Cuentas', q: '¿Cómo abro una cuenta corriente?', a: 'Puedes abrir tu cuenta 100% en línea desde nuestra app o sitio web. Solo necesitas tu cédula de identidad vigente y un selfie. El proceso toma menos de 5 minutos.' },
    { cat: 'Transferencias', q: '¿Cuál es el límite diario de transferencias?', a: 'El límite estándar es de $5.000.000 diarios. Puedes aumentarlo hasta $20.000.000 desde la app en Configuración > Límites de transferencia, con validación biométrica.' },
    { cat: 'Seguridad', q: '¿Qué hago si creo que fui víctima de fraude?', a: 'Bloquea tu tarjeta inmediatamente desde la app, luego llama al 600 600 1000 disponible 24/7. También puedes escribir a fraude@springbank.cl. Investigaremos el caso en un plazo máximo de 5 días hábiles.' },
    { cat: 'Tarjetas', q: '¿Cómo bloqueo mi tarjeta de crédito?', a: 'Desde la app SpringBank, ve a Tarjetas > selecciona tu tarjeta > Bloquear tarjeta. El bloqueo es inmediato. También puedes llamar al 600 600 1000.' },
    { cat: 'App móvil', q: '¿Por qué no puedo iniciar sesión en la app?', a: 'Verifica que tu conexión a internet esté activa. Si olvidaste tu contraseña, usa la opción "¿Olvidaste tu clave?" en la pantalla de inicio. Si el problema persiste, llama al 600 600 1000.' },
    { cat: 'Créditos', q: '¿Puedo prepagar mi crédito sin penalización?', a: 'Sí. Puedes realizar prepagos parciales o totales de tu crédito en cualquier momento sin costo adicional, de acuerdo con la Ley N° 18.010 sobre operaciones de crédito.' },
  ];

  canales = [
    { icon: 'fa-solid fa-phone', title: 'Teléfono', info: '600 600 1000', sub: 'Lunes a viernes 8:00 - 20:00\nSábados 9:00 - 14:00', color: '#0029FF' },
    { icon: 'fa-solid fa-comment-dots', title: 'Chat en línea', info: 'Disponible en la app', sub: 'Lunes a viernes 8:00 - 22:00\nFines de semana 9:00 - 18:00', color: '#16a34a' },
    { icon: 'fa-solid fa-envelope', title: 'Correo electrónico', info: 'ayuda@springbank.cl', sub: 'Respuesta en máximo\n2 días hábiles', color: '#7c3aed' },
    { icon: 'fa-solid fa-location-dot', title: 'Sucursales', info: '+120 sucursales', sub: 'Lunes a viernes 9:00 - 14:00\nEncuentra la más cercana', color: '#d97706' },
  ];

  faqAbierto: number | null = null;
  toggle(i: number) { this.faqAbierto = this.faqAbierto === i ? null : i; }
}
