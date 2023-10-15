import React from 'react';
import AccountList from './AccountList';

const Account = ({ accounts, getAllAccounts, account, setAccount }) => {
  return (
    <div className="account">
      <h1>
        Account <em>Information</em>
      </h1>
      <AccountList
        accounts={accounts}
        getAllAccounts={getAllAccounts}
        account={account}
        setAccount={setAccount}
      />
    </div>
  );
};

export default Account;
