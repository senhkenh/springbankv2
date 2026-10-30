import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-transfer',
  imports: [FormsModule, CommonModule, CurrencyPipe, RouterLink, Sidebar],
  templateUrl: './transfer.html',
  styleUrl: './transfer.scss'
})
export class Transfer {
  step = 1;
  success = false;
  error = '';
  lastAmount = 0;
  lastName = '';
  operationId = '';

  form = {
    fromAccount: 0,
    bank: '',
    toAccount: '',
    toName: '',
    toRut: '',
    amount: null as number | null,
    description: '',
  };

  accounts = [
    { name: 'Cuenta Corriente', number: '**** 4821', balance: 12450750, color: '#0029FF' },
    { name: 'Cuenta de Ahorros', number: '**** 9034', balance:  8000000, color: '#16a34a' },
    { name: 'Cuenta Nómina',     number: '**** 1157', balance:  4400000, color: '#d97706' },
  ];

  banks = [
    'SpringBank', 'Banco de Chile', 'BancoEstado', 'Santander',
    'BCI', 'Scotiabank', 'Itaú', 'Falabella', 'Ripley', 'Mercado Pago',
  ];

  contacts = [
    { name: 'María González',   bank: 'BancoEstado', account: '987654321', rut: '98.765.432-1' },
    { name: 'Carlos Rodríguez', bank: 'Santander',   account: '112233445', rut: '11.223.344-5' },
    { name: 'Ana Martínez',     bank: 'Banco de Chile', account: '556677889', rut: '55.667.788-9' },
  ];

  fillContact(c: typeof this.contacts[0]) {
    this.form.toName    = c.name;
    this.form.toRut     = c.rut;
    this.form.toAccount = c.account;
    this.form.bank      = c.bank;
  }

  nextStep() {
    const { fromAccount, bank, toAccount, toName, toRut, amount } = this.form;
    if (!bank || !toAccount || !toName || !toRut) {
      this.error = 'Por favor completa todos los datos del destinatario.';
      return;
    }
    if (!amount || amount < 1000) {
      this.error = 'El monto mínimo es $1.000.';
      return;
    }
    if (amount > this.accounts[fromAccount].balance) {
      this.error = 'Saldo insuficiente en la cuenta seleccionada.';
      return;
    }
    this.error = '';
    this.step = 2;
  }

  submit() {
    this.lastAmount = this.form.amount ?? 0;
    this.lastName   = this.form.toName;
    this.operationId = Math.floor(Math.random() * 9000000 + 1000000).toString();
    this.success = true;
    this.step = 1;
    this.form = { fromAccount: 0, bank: '', toAccount: '', toName: '', toRut: '', amount: null, description: '' };
  }

  reset() {
    this.success = false;
    this.error   = '';
  }
}
