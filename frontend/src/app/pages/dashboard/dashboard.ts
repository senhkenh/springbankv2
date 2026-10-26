import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  user = 'Carlos García';

  summary = [
    { label: 'Saldo total', value: 24850.75, icon: '💰', color: '#0029FF' },
    { label: 'Ingresos del mes', value: 5200.00, icon: '📈', color: '#22c55e' },
    { label: 'Gastos del mes', value: 1340.50, icon: '📉', color: '#ef4444' },
    { label: 'Ahorros', value: 8000.00, icon: '🏦', color: '#f59e0b' },
  ];

  transactions = [
    { desc: 'Nómina Empresa S.A.', date: '15 Jul 2025', amount: 3200, type: 'credit' },
    { desc: 'Supermercado La Colonia', date: '14 Jul 2025', amount: -85.40, type: 'debit' },
    { desc: 'Netflix', date: '13 Jul 2025', amount: -15.99, type: 'debit' },
    { desc: 'Transferencia recibida', date: '12 Jul 2025', amount: 500, type: 'credit' },
    { desc: 'Pago de servicios', date: '11 Jul 2025', amount: -120, type: 'debit' },
  ];
}
