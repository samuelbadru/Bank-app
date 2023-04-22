# Bank app

This is a simple banking application with capabilities to make deposits, withdrawals, and print an account statement.

## Installation
Using npm, install the `account` package as follows:
```
npm install account
```

## Usage
The app consists of one class - `Account`. Create a new instance of this class by calling its constructors as follows:
```javascript
const Account = require('account');
const account = new Account();
```

Once the object has been created, you can call the `deposit` and `withdrawal` methods to add and take, respectively, money from the account:
```javascript
account.deposit(1000);
account.deposit(2000);
account.withdrawal(500);
```
In order to see your account statment to show all transactions made on your account, use the `printStatement` method:
```javascript
account.printStatement();
```

Calling the above will print to the console an output that resembels this:
```javascript
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## API

Below are the methods expected to be called directly by users of the application.

### `new Account()`
Creates an instance of the `Account` class, with a default balance of 0 and no transactions.

### `account.deposit(amount)`
The given `amount` is added to the balance of the respective account. This transaction, along with the current date and balance, is stored in memory.

### `account.withdrawal(amount)`
The given `amount` is substracted from the balance of the respective account. This transaction, along with the current date and balance, is stored in memory.

### `account.printStatement()`
Prints formatted account statement to the console, with transactions being listed in reverse chronological order.


## License
This package is licensed under the MIT License.