class Account {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log(`harap masukkan jumlah yang valid!`);
    } else {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log(`saldo anda tidak cukup!`);
    } else {
      this.balance -= amount;
      console.log(`anda berhasil melakukan withdraw sebanyak ${amount}
saldo anda tersisa ${this.balance}`);
    }
  }
}

let akun1 = new Account("aryus");
