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

  test('withdrawals decrease the balance by that ammount', () => {
    account.deposit(1000);
    account.deposit(2000);
    account.withdrawal(500);
    expect(account.balance).toBe(2500)
  });

  test('no transactions in new account', () => {
    expect(account.transactions).toEqual([]);
  });

  test('deposit transactions are recorded', () => {
    const mockDate = new Date('2023-01-10');
    const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    account.deposit(1000);
    
    expect(account.transactions[0]).toEqual({
      transaction: 'deposit',
      date: mockDate,
      amount: 1000,
      balance: 1000
    });

    dateSpy.mockRestore();
  });

  test('withdrawal transactions are recorded', () => {
    const mockDate = new Date('2023-01-14');
    const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    account.withdrawal(500);
    
    expect(account.transactions[0]).toEqual({
      transaction: 'withdrawal',
      date: mockDate,
      amount: 500,
      balance: -500
    });

    dateSpy.mockRestore();
  });

  test('print only statement headings when no transactions have been made', () => {
    const conSpy = jest.spyOn(console, 'log');
    account.printStatement();
    expect(conSpy).toHaveBeenCalledWith('date || credit || debit || balance');
    conSpy.mockRestore();
  });
  
  test('prints statement with heading and transactions', () => {
    const mockDate = new Date('2023-01-10');
    const mockDate2 = new Date('2023-01-13');
    const mockDate3 = new Date('2023-01-14');
    let dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    account.deposit(1000);
    dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate2);
    account.deposit(2000);
    dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate3);
    account.withdrawal(500);

    const conSpy = jest.spyOn(console, 'log');
    account.printStatement();
    expect(conSpy).toHaveBeenCalledWith('date || credit || debit || balance');
    expect(conSpy).toHaveBeenCalledWith('14/01/2023 || || 500.00 || 2500.00');
    expect(conSpy).toHaveBeenCalledWith('13/01/2023 || 2000.00 || || 3000.00');
    expect(conSpy).toHaveBeenCalledWith('10/01/2023 || 1000.00 || || 1000.00');
  
    dateSpy.mockRestore();
    conSpy.mockRestore();
  });

});