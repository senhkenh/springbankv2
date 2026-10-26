import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transfer',
  imports: [FormsModule, CommonModule],
  templateUrl: './transfer.html',
  styleUrl: './transfer.scss'
})
export class Transfer {
  form = {
    fromAccount: '',
    toAccount: '',
    amount: null as number | null,
    description: '',
  };

  accounts = ['**** 4821 - Corriente', '**** 9034 - Ahorros', '**** 1157 - Nómina'];
  success = false;
  error = '';

  submit() {
    const { fromAccount, toAccount, amount } = this.form;
    if (!fromAccount || !toAccount || !amount || amount <= 0) {
      this.error = 'Por favor completa todos los campos correctamente.';
      return;
    }
    if (fromAccount === toAccount) {
      this.error = 'Las cuentas de origen y destino deben ser diferentes.';
      return;
    }
    this.error = '';
    this.success = true;
    this.form = { fromAccount: '', toAccount: '', amount: null, description: '' };
  }

  reset() { this.success = false; }
}
