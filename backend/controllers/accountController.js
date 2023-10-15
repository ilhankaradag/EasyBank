const BankAccount = require('../models/accountModel');

const addAccount = async (req, res) => {
  try {
    let newAccount = req.body;
    let createdAccount = await BankAccount.create(newAccount);
    res.send({ msg: 'New Account is created' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'Failed to create a new account' });
  }
};

const getAccount = async (req, res) => {
  try {
    let allAccount = await BankAccount.find();
    res.status(200).send(allAccount);
  } catch {
    console.log(err);
    res.status(500).send({ msg: 'Failed to retrieve account' });
  }
};

const updateAccount = async (req, res) => {
  try {
    let newValue = req.body;
    let id = req.params.id;
    await BankAccount.updateOne({ _id: id }, newValue);
    res.status(200).send({ msg: 'The account updated successfully' });
  } catch {
    console.log(err);
    res.status(500).send({ msg: 'Failed to update the account' });
  }
};

const deleteAccount = async (req, res) => {
  try {
    let id = req.params.id;
    await BankAccount.deleteOne({ _id: id });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ msg: 'Unable to delete the account', error: err.message });
  }
};

const transferAccount = async (req, res) => {
  try {
    const { senderAccountId, receiverAccountId, amount } = req.body;

    // It's important to check the accounts before the transaction
    const senderAccount = await BankAccount.findById(senderAccountId);
    const receiverAccount = await BankAccount.findById(receiverAccountId);

    if (!senderAccount || !receiverAccount) {
      return res.status(404).send({ msg: 'Account not found' });
    }

    if (senderAccount.balance < amount) {
      return res
        .status(400)
        .send({ msg: 'Insufficient balance in the sender account' });
    }

    // Deducting money from the sender account
    senderAccount.balance -= amount;
    await senderAccount.save();

    // Adding money to the receiver account
    receiverAccount.balance += amount;
    await receiverAccount.save();

    res.status(200).send({ msg: 'Transfer successfully completed' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: 'Transfer failed' });
  }
};

module.exports = {
  addAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  transferAccount,
};
