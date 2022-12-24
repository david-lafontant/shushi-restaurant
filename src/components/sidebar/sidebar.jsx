import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faShoppingCart,
  faLocationDot,
  faSignOut,
  faCutlery,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <div className="bg-black text-white w-1/12 h-4/5 rounded-md shadow-2xl mt-16 fixed left-4">

    <ul className="text-4xl flex flex-col items-center h-full justify-evenly w-full">
      <li className="text-beige py-4 font-bold antialiased cursor-pointer hover:bg-beige hover:text-black w-full text-center ">
        S.
      </li>
      <li className="antialiased hover:bg-beige hover:text-black w-full text-center ">

        <Link to="/">
          <FontAwesomeIcon icon={faHouse} className="cursor-pointer py-4" />
        </Link>
      </li>
      <li className="antialiased hover:bg-beige hover:text-black w-full text-center ">
        <Link to="/menu">
          <FontAwesomeIcon icon={faCutlery} className="cursor-pointer py-4" />
        </Link>
      </li>
      <li className="antialiased hover:bg-beige hover:text-black w-full text-center ">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer py-4" />
        </Link>
      </li>
      <li className="antialiased hover:bg-beige hover:text-black w-full text-center ">
        <FontAwesomeIcon icon={faLocationDot} className="cursor-pointer py-4" />
      </li>
      <li className="antialiased hover:bg-beige hover:text-black w-full text-center ">
        <FontAwesomeIcon icon={faSignOut} className="cursor-pointer py-4" />
      </li>
    </ul>

  </div>
);

export default Sidebar;
