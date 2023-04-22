class Account{
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdrawal(amount) {
    this.balance -= amount;
  }

}

module.exports = Account