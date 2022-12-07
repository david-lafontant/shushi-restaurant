import React from 'react';
// import { Link } from 'react-router-dom';
import landing from '../../assets/images/landing.svg';

const Home = () => { return (
  <div className="text-white w-full h-screen flex justify-between items-center" style={{ backgroundImage: `url(${landing})` }}>
    <div>Chevron left</div>
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to Sushi Restaurant
      </h1>
      <p>
        People eat with their eyes and Shushi Restaurant creates an easy way
        for customers to order when they can see beautiful photos of your food
      </p>
      <a href="https://www.google.com/">About</a>
      <a href="https://www.google.com/">Menu</a>
    </div>
    <div>Chevron right</div>
  </div>
);
};

export default Home;
