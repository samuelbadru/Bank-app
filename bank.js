class Account{
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ transaction: 'deposit', date: new Date(), amount: amount, balance: this.balance })
  }

  withdrawal(amount) {
    this.balance -= amount;
  }

}

module.exports = Account