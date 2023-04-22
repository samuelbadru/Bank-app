const Account = require('./bank')

describe('Account', () => {
  test('account exists', () => {
    expect(Account).toBeDefined();
  });

  test('default balance is 0', () => {
    const account = new Account();
    expect(account.balance).toBe(0);
  });


});