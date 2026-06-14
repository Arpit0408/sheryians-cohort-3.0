function createBankAccount() {
    let balance = 0;
    return {
        deposite(amt) { balance += amt; return balance; },
        getBalance() { return balance; }
    }
}

const acc = createBankAccount();
console.log(acc.deposite(100));
console.log(acc.deposite(160));
console.log(acc.getBalance());

