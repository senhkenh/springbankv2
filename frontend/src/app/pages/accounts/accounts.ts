import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss'
})
export class Accounts {
  accounts = [
    { name: 'Cuenta Corriente', number: '**** **** 4821', balance: 12450.75, type: 'Corriente', color: '#0029FF' },
    { name: 'Cuenta de Ahorros', number: '**** **** 9034', balance: 8000.00, type: 'Ahorros', color: '#22c55e' },
    { name: 'Cuenta Nómina', number: '**** **** 1157', balance: 4400.00, type: 'Nómina', color: '#f59e0b' },
  ];

  movements = [
    { desc: 'Nómina Empresa S.A.', date: '15 Jul', amount: 3200, account: '**** 4821' },
    { desc: 'Supermercado', date: '14 Jul', amount: -85.40, account: '**** 4821' },
    { desc: 'Transferencia ahorro', date: '13 Jul', amount: -500, account: '**** 9034' },
    { desc: 'Intereses', date: '10 Jul', amount: 12.50, account: '**** 9034' },
    { desc: 'Pago servicios', date: '09 Jul', amount: -120, account: '**** 1157' },
    { desc: 'Depósito nómina', date: '01 Jul', amount: 2000, account: '**** 1157' },
  ];
}
