class Account{
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.unshift({ transaction: 'deposit', date: new Date(), amount: amount, balance: this.balance })
  }

  withdrawal(amount) {
    this.balance -= amount;
    this.transactions.unshift({ transaction: 'withdrawal', date: new Date(), amount: amount, balance: this.balance })
  }

  printHeader() {
    console.log('date || credit || debit || balance');
  }

  printStatement() {
    this.printHeader();
    this.transactions.forEach((record) => {
      const date = record.date.toLocaleDateString('en-UK');
      const amount = record.amount.toFixed(2);
      const balance = record.balance.toFixed(2);
      if (record.transaction === 'deposit') {
        console.log(`${date} || ${amount} || || ${balance}`);
      } else {
        console.log(`${date} || || ${amount} || ${balance}`);
      }
    });
  }
}

module.exports = Account