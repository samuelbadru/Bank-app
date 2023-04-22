class Account{
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // Transactions are stored in reverse chronological order 
  deposit(amount) {
    this.balance += amount;
    this.transactions.unshift({ transaction: 'deposit', date: new Date(), amount: amount, balance: this.balance })
  }

  withdrawal(amount) {
    this.balance -= amount;
    this.transactions.unshift({ transaction: 'withdrawal', date: new Date(), amount: amount, balance: this.balance })
  }

  formatTransaction(record) {
    // Date converted to DD/MM/YYYY format and floats are rounded to 2 decimal points
    const date = record.date.toLocaleDateString('en-UK');
    const amount = record.amount.toFixed(2);
    const balance = record.balance.toFixed(2);
    return { date, amount, balance };
  }

  printHeader() {
    console.log('date || credit || debit || balance');
  }

  printRecord(record) {
    const format = this.formatTransaction(record)
    if (record.transaction === 'deposit') {
      console.log(`${format.date} || ${format.amount} || || ${format.balance}`);
    } else {
      console.log(`${format.date} || || ${format.amount} || ${format.balance}`);
    }
  }

  printStatement() {
    this.printHeader();
    this.transactions.forEach((record) => {
      this.printRecord(record);
    });
  }
  
}

module.exports = Account