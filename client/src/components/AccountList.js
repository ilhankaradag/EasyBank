import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AccountList = ({ accounts, getAllAccounts, account, setAccount }) => {
  function deleteAccount(id) {
    try {
      axios
        .delete(`http://localhost:5000/account/${id}`)
        .then(() => {
          getAllAccounts();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="account-list">
      <div>
        <button className="button-46" onClick={() => getAllAccounts()}>
          Account List
        </button>
      </div>
      <div className="styled-table">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Account Number</th>
              <th>Balance</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody key={account._id}>
            {accounts.map((account) => (
              <tr>
                <td>{account.userName}</td>
                <td>{account.accountNumber}</td>
                <td>{account.balance + ' €'}</td>
                <td>
                  <button onClick={() => deleteAccount(account._id)}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      width={'30px'}
                      height={'50px'}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountList;
