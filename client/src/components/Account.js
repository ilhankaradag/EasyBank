import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddAccount from './AddAccount';
import AccountList from './AccountList';

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState({
    userName: '',
    accountNumber: '',
    balance: '',
  });

  function getAllAccounts() {
    try {
      axios.get('http://localhost:5000/account').then((res) => {
        setAccounts(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllAccounts();
  }, []);

  return (
    <div className="account">
      <h1>Account List</h1>
      <AccountList
        accounts={accounts}
        getAllAccounts={getAllAccounts}
        account={account}
        setAccount={setAccount}
      />
      <AddAccount
        getAllAccounts={getAllAccounts}
        account={account}
        setAccount={setAccount}
      />
    </div>
  );
};

export default Account;
