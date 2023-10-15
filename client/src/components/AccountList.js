import React from 'react';

const AccountList = ({ accounts, getAllAccounts, account, setAccount }) => {
  console.log(account);
  return (
    <div className="account-list">
      <div>
        <button onClick={() => getAllAccounts()}>List Account</button>
      </div>
      <div className="styled-table">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Account Number</th>
              <th>Balance</th>
            </tr>
          </thead>
          {accounts.map((account) => (
            <tbody key={account._id}>
              <tr>
                <td>{account.userName}</td>
                <td>{account.accountNumber}</td>
                <td>{account.balance}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AccountList;
