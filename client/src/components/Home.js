import React from 'react';
import img from '../img/bank.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src={img} alt="bank" width={'400px'} height={'500px'} />
      </div>
      <h1 className="home-title">
        WELCOME TO <em>EASY BANK</em>
      </h1>
    </div>
  );
};

export default Home;
