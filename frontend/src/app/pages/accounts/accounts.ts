import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule, CurrencyPipe, RouterLink, Sidebar],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss'
})
export class Accounts {
  selectedAccount = 0;
  filterType: 'all' | 'credit' | 'debit' = 'all';

  accounts = [
    { name: 'Cuenta Corriente', number: '**** **** **** 4821', balance: 12450750, type: 'Corriente', color: '#0029FF' },
    { name: 'Cuenta de Ahorros', number: '**** **** **** 9034', balance: 8000000,  type: 'Ahorros',   color: '#16a34a' },
    { name: 'Cuenta Nómina',     number: '**** **** **** 1157', balance: 4400000,  type: 'Nómina',    color: '#d97706' },
  ];

  allMovements = [
    { desc: 'Depósito nómina',          category: 'Ingresos',       date: '28 Oct 2026', amount: 3200000, balance: 12450750, type: 'credit', accountIdx: 0 },
    { desc: 'Supermercado Lider',        category: 'Alimentación',   date: '27 Oct 2026', amount:   85400, balance:  9250750, type: 'debit',  accountIdx: 0 },
    { desc: 'Netflix',                   category: 'Entretenimiento',date: '26 Oct 2026', amount:   15990, balance:  9336150, type: 'debit',  accountIdx: 0 },
    { desc: 'Transferencia recibida',    category: 'Transferencia',  date: '25 Oct 2026', amount:  500000, balance:  9352140, type: 'credit', accountIdx: 0 },
    { desc: 'Cuenta del agua',           category: 'Servicios',      date: '24 Oct 2026', amount:   32000, balance:  8852140, type: 'debit',  accountIdx: 0 },
    { desc: 'Cuenta de la luz',          category: 'Servicios',      date: '22 Oct 2026', amount:   65000, balance:  8884140, type: 'debit',  accountIdx: 0 },
    { desc: 'Intereses cuenta ahorro',   category: 'Rendimientos',   date: '20 Oct 2026', amount:   12500, balance:  8000000, type: 'credit', accountIdx: 1 },
    { desc: 'Transferencia a ahorro',    category: 'Ahorro',         date: '15 Oct 2026', amount:  500000, balance:  7987500, type: 'credit', accountIdx: 1 },
    { desc: 'Depósito nómina',           category: 'Ingresos',       date: '01 Oct 2026', amount: 2200000, balance:  4400000, type: 'credit', accountIdx: 2 },
    { desc: 'Descuento prevision',       category: 'Descuento',      date: '01 Oct 2026', amount:  220000, balance:  2200000, type: 'debit',  accountIdx: 2 },
  ];

  selectAccount(i: number) {
    this.selectedAccount = i;
    this.filterType = 'all';
  }

  get filteredMovements() {
    return this.allMovements
      .filter(m => m.accountIdx === this.selectedAccount)
      .filter(m => this.filterType === 'all' || m.type === this.filterType);
  }
}
