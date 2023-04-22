const Account = require('./bank')

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  test('account exists', () => {
    expect(Account).toBeDefined();
  });

  test('default balance is 0', () => {
    expect(account.balance).toBe(0);
  });

  test('deposits increase the balance by that amount', () => {
    account.deposit(1000);
    account.deposit(2000);
    expect(account.balance).toBe(3000);
  });


});