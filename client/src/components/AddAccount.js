import React from 'react';

const AddAccount = ({ getAllAccounts, Account, setAccount }) => {
  return (
    <div className="add-account">
      <div>
        <input type="text" placeholder="Add a account name" />
      </div>
      <div>
        <input type="text" placeholder="Add a account name" />
      </div>
      <div>
        <input type="text" placeholder="Add a account name" />
      </div>
    </div>
  );
};

export default AddAccount;
