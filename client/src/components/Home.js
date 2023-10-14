import React from 'react';
import img from '../img/bank.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src={img} alt="bank" width={'400px'} height={'500px'} />
      </div>
      <h1 className="home-title">WELCOME TO EASY BANK</h1>
    </div>
  );
};

export default Home;
