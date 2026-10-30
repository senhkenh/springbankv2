import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PublicNavbar } from '../../shared/public-navbar/public-navbar';
import { PublicFooter } from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-inversiones',
  imports: [CommonModule, RouterLink, PublicNavbar, PublicFooter],
  templateUrl: './inversiones.html',
  styleUrl: './inversiones.scss'
})
export class Inversiones {
  fondos = [
    { nombre: 'Fondo Conservador', tipo: 'Renta Fija', rentabilidad: '4.2%', riesgo: 'Bajo', plazo: 'Desde 30 días', minimo: '$10.000', desc: 'Ideal para quienes buscan preservar su capital con rentabilidad estable.' },
    { nombre: 'Fondo Moderado', tipo: 'Mixto', rentabilidad: '7.8%', riesgo: 'Medio', plazo: 'Desde 90 días', minimo: '$50.000', desc: 'Equilibrio entre rentabilidad y seguridad para el inversionista promedio.' },
    { nombre: 'Fondo Crecimiento', tipo: 'Renta Variable', rentabilidad: '12.4%', riesgo: 'Alto', plazo: 'Desde 1 año', minimo: '$100.000', desc: 'Máxima rentabilidad para inversionistas con tolerancia al riesgo.' },
  ];

  productos = [
    { icon: 'fa-solid fa-piggy-bank', title: 'Depósito a Plazo', desc: 'Tasa garantizada desde el primer día. Plazos desde 7 hasta 365 días.', tasa: 'Hasta 6.5% anual' },
    { icon: 'fa-solid fa-chart-line', title: 'Fondos Mutuos', desc: 'Diversifica tu inversión con acceso a mercados nacionales e internacionales.', tasa: 'Desde 4.2% anual' },
    { icon: 'fa-solid fa-building', title: 'Renta Inmobiliaria', desc: 'Invierte en bienes raíces desde $500.000 con rentabilidad en UF.', tasa: 'Desde 5.8% anual' },
    { icon: 'fa-solid fa-globe', title: 'Acciones Internacionales', desc: 'Accede a los mercados de EE.UU., Europa y Asia desde tu cuenta.', tasa: 'Variable' },
  ];

  pasos = [
    { n: '01', title: 'Abre tu cuenta', desc: 'Si ya eres cliente, activa tu perfil de inversiones en la app en menos de 2 minutos.' },
    { n: '02', title: 'Define tu perfil', desc: 'Responde un breve cuestionario para determinar tu tolerancia al riesgo y objetivos.' },
    { n: '03', title: 'Elige tu inversión', desc: 'Selecciona el producto que mejor se adapta a tu perfil y horizonte de inversión.' },
    { n: '04', title: 'Monitorea tu portafolio', desc: 'Sigue el rendimiento de tus inversiones en tiempo real desde la app.' },
  ];
}
