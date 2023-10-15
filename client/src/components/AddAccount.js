import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAccount = ({ getAllAccounts }) => {
  const [account, setAccount] = useState({
    userName: '',
    accountNumber: '',
    balance: '',
  });
  const navigate = useNavigate();

  function handleInputChange(e, fieldName) {
    setAccount({
      ...account,
      [fieldName]: e.target.value,
    });
  }

  const addNewAccount = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/create',
        account,
      );
      alert(response.data.msg);
      navigate('/account');
      getAllAccounts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-account">
      <div>
        <input
          type="text"
          placeholder="Add a user name"
          onChange={(e) => handleInputChange(e, 'userName')}
          value={account.userName}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Add an account number"
          onChange={(e) => handleInputChange(e, 'accountNumber')}
          value={account.accountNumber}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Add a balance"
          onChange={(e) => handleInputChange(e, 'balance')}
          value={account.balance}
        />
      </div>
      <div>
        <button className="button-46" onClick={addNewAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default AddAccount;
