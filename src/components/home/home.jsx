import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import landing from '../../assets/images/landing.svg';

const Home = () => (
  <div className="text-white w-full h-screen flex justify-evenly items-center antialiased" style={{ backgroundImage: `url(${landing})` }}>
    <div>
      <FontAwesomeIcon className="text-6xl font-bold" icon={faChevronLeft} />
    </div>
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl text-center">
        Welcome to
        <span className="font-bold mx-2">
          Shushi
        </span>
        Restaurant
      </h1>
      <p className="flex flex-col items-center">
        <span>
          People eat with their eyes and Shushi Restaurant creates an easy way
        </span>
        <span>
          for customers to order when they can see beautiful photos of your food
        </span>
      </p>
      <div className="flex justify-center items-center space-x-4">
        <a className="inline-block bg-white px-6 py-2 border-2 border-gray-800 text-gray-800 font-large text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="https://www.google.com/">
          About
        </a>
        <a className="inline-block bg-white px-6 py-2 border-2 border-gray-800 text-gray-800 font-large text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="https://www.google.com/">
          Menu
        </a>
      </div>
    </div>
    <div>
      <FontAwesomeIcon className="text-6xl font-bold" icon={faChevronRight} />
    </div>
  </div>
);

export default Home;
