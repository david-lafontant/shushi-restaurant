import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <div>
        Chevron left
      </div>
      <div>
        <h1>Welcome to Sushi Restaurant</h1>
        <p>People eat with their eyes and Shushi Restaurant creates an easy way for
          customers to order when they can see beautiful photos of your food </p>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
      </div>
      <div>Chevron right</div>
    </div>
  );
}

export default Home;