import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faShoppingCart,
  faLocationDot,
  faSignOut,
  faCutlery,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <div className="bg-black text-white w-1/12 h-4/5 rounded-md shadow-2xl p-2">

    <ul className="text-4xl flex flex-col items-center h-full justify-evenly">
      <li>
        S.
      </li>
      <li>
        <FontAwesomeIcon icon={faHouse} />
      </li>
      <li>
        <FontAwesomeIcon icon={faCutlery} />
      </li>
      <li>
        <FontAwesomeIcon icon={faShoppingCart} />
      </li>
      <li>
        <FontAwesomeIcon icon={faLocationDot} />
      </li>
      <li>
        <FontAwesomeIcon icon={faSignOut} />
      </li>
    </ul>

  </div>
);

export default Sidebar;
