import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empresa',
  imports: [CommonModule, RouterLink],
  templateUrl: './empresa.html',
  styleUrl: './empresa.scss'
})
export class Empresa {
  productos = [
    {
      icon: 'fa-solid fa-building-columns', title: 'Cuenta Corriente Empresa',
      desc: 'Administra los flujos de tu negocio con una cuenta diseñada para empresas de todos los tamaños.',
      features: ['Sin costo de mantención el primer año', 'Múltiples usuarios y perfiles', 'Transferencias masivas', 'Integración con ERP'],
      bg: '#e6eaff', color: '#0029FF'
    },
    {
      icon: 'fa-solid fa-file-invoice-dollar', title: 'Factoring',
      desc: 'Convierte tus facturas en liquidez inmediata. Financia tu capital de trabajo sin endeudarte.',
      features: ['Anticipo hasta el 90% de la factura', 'Aprobación en 24 horas', 'Sin garantías adicionales', 'Gestión de cobranza incluida'],
      bg: '#fef3c7', color: '#d97706'
    },
    {
      icon: 'fa-solid fa-truck', title: 'Leasing',
      desc: 'Financia activos fijos para tu empresa: maquinaria, vehículos, equipos tecnológicos y más.',
      features: ['Hasta 60 meses plazo', 'Opción de compra al vencimiento', 'Beneficio tributario', 'Sin pie inicial'],
      bg: '#dcfce7', color: '#16a34a'
    },
    {
      icon: 'fa-solid fa-ship', title: 'Comercio Exterior',
      desc: 'Soluciones financieras para importadores y exportadores. Opera en más de 50 países.',
      features: ['Cartas de crédito', 'Cobranzas documentarias', 'Seguros de cambio', 'Asesoría especializada'],
      bg: '#f3e8ff', color: '#7c3aed'
    },
    {
      icon: 'fa-solid fa-chart-line', title: 'Inversiones Empresariales',
      desc: 'Rentabiliza el excedente de caja de tu empresa con instrumentos de inversión a medida.',
      features: ['Fondos mutuos corporativos', 'Depósitos a plazo', 'Renta fija', 'Mesa de dinero dedicada'],
      bg: '#fce7f3', color: '#db2777'
    },
    {
      icon: 'fa-solid fa-shield-halved', title: 'Seguros Empresariales',
      desc: 'Protege tu empresa, activos y colaboradores con coberturas integrales.',
      features: ['Seguro de incendio y robo', 'Seguro de vida colectivo', 'Responsabilidad civil', 'Seguro de crédito'],
      bg: '#e0f2fe', color: '#0284c7'
    },
  ];

  beneficios = [
    { icon: 'fa-solid fa-bolt', title: 'Aprobación express', desc: 'Créditos y productos aprobados en menos de 24 horas hábiles.' },
    { icon: 'fa-solid fa-user-tie', title: 'Ejecutivo dedicado', desc: 'Un ejecutivo exclusivo para tu empresa, disponible cuando lo necesites.' },
    { icon: 'fa-solid fa-mobile-screen', title: 'Banca digital empresarial', desc: 'Plataforma online con multiusuario, firmas digitales y reportes en tiempo real.' },
    { icon: 'fa-solid fa-globe', title: 'Presencia internacional', desc: 'Operaciones en más de 50 países con corresponsales en todo el mundo.' },
  ];

  testimonios = [
    { text: 'El factoring de SpringBank nos permitió crecer un 40% sin necesidad de endeudarnos. El proceso fue increíblemente rápido.', name: 'Patricia Morales', role: 'CEO, Constructora Morales S.A.', inicial: 'P' },
    { text: 'Llevamos 8 años trabajando con SpringBank Empresas. El ejecutivo dedicado hace toda la diferencia en la gestión diaria.', name: 'Felipe Contreras', role: 'CFO, Exportadora del Sur', inicial: 'F' },
    { text: 'La plataforma digital empresarial es excelente. Podemos hacer transferencias masivas y ver reportes en tiempo real.', name: 'Valentina Ríos', role: 'Gerente Finanzas, Retail VR', inicial: 'V' },
  ];

  planes = [
    {
      nombre: 'Pyme', precio: '$29.990', periodo: '/mes',
      desc: 'Ideal para pequeñas empresas que están creciendo.',
      features: ['Cuenta corriente empresa', 'Hasta 3 usuarios', '50 transferencias/mes', 'Soporte por email'],
      destacado: false
    },
    {
      nombre: 'Empresa', precio: '$79.990', periodo: '/mes',
      desc: 'Para empresas medianas con operaciones frecuentes.',
      features: ['Todo lo de Pyme', 'Hasta 15 usuarios', 'Transferencias ilimitadas', 'Ejecutivo dedicado', 'Factoring express', 'Soporte 24/7'],
      destacado: true
    },
    {
      nombre: 'Corporativo', precio: 'A medida', periodo: '',
      desc: 'Soluciones personalizadas para grandes corporaciones.',
      features: ['Todo lo de Empresa', 'Usuarios ilimitados', 'Mesa de dinero', 'Comercio exterior', 'API bancaria', 'SLA garantizado'],
      destacado: false
    },
  ];
}
