import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CurrencyPipe, RouterLink, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  summary = [
    { label: 'Saldo total',      value: 24850750, icon: 'fa-solid fa-circle-dollar-sign', bg: '#eef1ff', color: '#0029FF', change: '+$1.200.000 este mes', positive: true  },
    { label: 'Ingresos del mes', value:  5200000, icon: 'fa-solid fa-arrow-trend-up',      bg: '#dcfce7', color: '#16a34a', change: 'vs $4.800.000 anterior', positive: true  },
    { label: 'Gastos del mes',   value:  1340500, icon: 'fa-solid fa-arrow-trend-down',    bg: '#fee2e2', color: '#dc2626', change: '+$120.000 vs anterior',  positive: false },
    { label: 'Ahorros',          value:  8000000, icon: 'fa-solid fa-piggy-bank',           bg: '#fef3c7', color: '#d97706', change: 'Meta: $10.000.000',       positive: true  },
  ];

  transactions = [
    { desc: 'Depósito nómina',            date: '28 Oct', account: '**** 4821', amount: 3200000,  type: 'credit' },
    { desc: 'Supermercado Lider',         date: '27 Oct', account: '**** 4821', amount:   85400,  type: 'debit'  },
    { desc: 'Netflix',                    date: '26 Oct', account: '**** 4821', amount:   15990,  type: 'debit'  },
    { desc: 'Transferencia recibida',     date: '25 Oct', account: '**** 4821', amount:  500000,  type: 'credit' },
    { desc: 'Cuenta de agua',             date: '24 Oct', account: '**** 1157', amount:   32000,  type: 'debit'  },
    { desc: 'Intereses cuenta ahorro',    date: '20 Oct', account: '**** 9034', amount:   12500,  type: 'credit' },
  ];

  accounts = [
    { name: 'Cuenta Corriente', number: '**** **** 4821', balance: 12450750, color: '#0029FF' },
    { name: 'Cuenta de Ahorros', number: '**** **** 9034', balance: 8000000, color: '#16a34a' },
    { name: 'Cuenta Nómina',     number: '**** **** 1157', balance: 4400000, color: '#d97706' },
  ];

  get totalBalance(): number {
    return this.accounts.reduce((sum, a) => sum + a.balance, 0);
  }

  quickActions = [
    { label: 'Transferir',    icon: 'fa-solid fa-right-left',          bg: '#eef1ff', color: '#0029FF', link: '/transfer'    },
    { label: 'Mis cuentas',   icon: 'fa-solid fa-wallet',              bg: '#dcfce7', color: '#16a34a', link: '/accounts'    },
    { label: 'Tarjetas',      icon: 'fa-solid fa-credit-card',         bg: '#fce7f3', color: '#db2777', link: '/tarjetas'    },
    { label: 'Créditos',      icon: 'fa-solid fa-hand-holding-dollar', bg: '#fef3c7', color: '#d97706', link: '/creditos'    },
    { label: 'Inversiones',   icon: 'fa-solid fa-chart-pie',           bg: '#f3e8ff', color: '#7c3aed', link: '/inversiones' },
    { label: 'Ayuda',         icon: 'fa-solid fa-circle-question',     bg: '#e0f2fe', color: '#0284c7', link: '/ayuda'       },
  ];
}
