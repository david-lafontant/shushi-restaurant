import React from 'react';
// import { Link } from 'react-router-dom';
import landing from '../../assets/images/landing.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => { return (
  <div className="text-white w-full h-screen flex justify-between items-center" style={{ backgroundImage: `url(${landing})` }}>
    <div>
    <FontAwesomeIcon className="text-6xl font-bold" icon={faChevronLeft} />
     </div>
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
    <div>
    <FontAwesomeIcon className="text-6xl font-bold" icon={faChevronRight} />
    </div>
  </div>
);
};

export default Home;
