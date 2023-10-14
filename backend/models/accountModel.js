const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema(
  {
    userName: { type: String },
    accountNumber: { type: Number },
    balance: { type: Number },
  },
  {
    timestamps: true,
  },
);
const BankAccount = mongoose.model('BankAccount', bankAccountSchema);

module.exports = BankAccount;
