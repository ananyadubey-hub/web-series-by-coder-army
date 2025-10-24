let user = {
  balance: 500,

  deposit: function(amount) {
    if (typeof amount === "number" && amount > 0) {
      this.balance += amount;
      return this.balance;
    } else {
      return "Invalid amount";
    }
  },

  withdraw: function(amount) {
    if (typeof amount === "number" && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      return "Invalid or insufficient balance";
    }
  },

  getBalance: function() {
    return this.balance;
  }
};
user.balance="ananya";

console.log(user.getBalance());  // 500
user.deposit(200);
console.log(user.getBalance());  // 700
user.withdraw(100);
console.log(user.getBalance());  // 600
