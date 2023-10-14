import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Account from './components/Account';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
