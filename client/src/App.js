import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import AccountList from './components/AccountList';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccountList />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
