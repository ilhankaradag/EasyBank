import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import Nav from './components/Nav';
import Account from './components/Account';
import CreateAccount from './components/CreateAccount';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState({
    userName: '',
    accountNumber: '',
    balance: '',
  });

  function getAllAccounts() {
    try {
      axios
        .get('http://localhost:5000/account')
        .then((res) => {
          setAccounts(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log('API request error:', error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllAccounts();
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account"
          element={
            <Account
              accounts={accounts}
              getAllAccounts={getAllAccounts}
              account={account}
              setAccount={setAccount}
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreateAccount
              getAllAccounts={getAllAccounts}
              account={account}
              setAccount={setAccount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
