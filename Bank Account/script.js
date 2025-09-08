class Account {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
    this.history = [];
  }

  //   class Bank {
  //     constructor(){

  //     }
  //   }

  deposit(amount) {
    if (amount <= 0) {
      console.log(`harap masukkan jumlah yang valid!`);
    } else {
      this.balance += amount;
      this.history.push(`deposit sebanyak ${amount}`);
    }
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log(`saldo anda tidak cukup!`);
    } else {
      this.balance -= amount;
      console.log(`anda berhasil melakukan withdraw sebanyak ${amount}
saldo anda tersisa ${this.balance}`);
      this.history.push(`withdraw ${amount}`);
    }
  }

  transfer(amount, target) {
    if (this.balance < amount) {
      console.log(`bro.. lu aja gada duit mau sosoan transfer wakakak`);
    } else {
      target.deposit(amount);
      this.balance -= amount;
      console.log(
        `kamu berhasil transfer sebesar ${amount} kepada ${target.name}`
      );
      this.history.push(`transfer sebesar ${amount} kepada ${target.name}`);
    }
  }
}

let kageshi = new Account("Kageshi");
let topaz = new Account("Topaz", 1000000000000000);
