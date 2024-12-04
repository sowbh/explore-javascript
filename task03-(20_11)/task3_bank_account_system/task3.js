// class creation
class BankAccount{
    balance;
    accountHolder;
    accountNumber;
    
    // constructor
    constructor(balance, accountHolder, accountNumber){
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
    }

    // methods
    deposit(amount){
        this.balance += amount;
        console.log(`Current balance after deposit: ${this.balance}`);
    }

    withdraw(amount){
        this.balance -= amount;
    }

    getBalance(){
        console.log(`Current balance after withdrawal: ${this.balance}`);
    }
}

var sbi = new BankAccount(5000, "Tyson", 123456789);
console.log(sbi);

sbi.deposit(1000);

sbi.withdraw(1500);
sbi.getBalance();