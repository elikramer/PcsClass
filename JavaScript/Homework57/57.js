function transaction(amount) {
    'use strict';
    this.balance += amount;
}

const account1 = {
    balance : 1000,
};

const account2 = {
    balance : 1000,
};

transaction.apply(account1, [300]);
transaction.apply(account2, [-567]);

console.log(account1.balance);
console.log(account2.balance);
