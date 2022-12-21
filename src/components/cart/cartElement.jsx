import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import dish from '../../assets/img/icon-food1.svg';

const CartElement = ({ obj }) => (
  <div className="flex flex-row p-2 items-center bg-beige border justify-between">

    <img src={dish} alt={obj.name} className="h-16 w-16" />

    <div>
      <p className="font-bold">{obj.name}</p>
      <p>
        <span> $ </span>
        {obj.price}
      </p>
    </div>

    <div>
      <p className="flex flex-row items-center">

        <FontAwesomeIcon className="p-2 cursor-pointer" icon={faMinus} />

        <span className="bg-white p-2">
          1
        </span>

        <FontAwesomeIcon className="p-2 cursor-pointer" icon={faPlus} />

      </p>
    </div>

    <div>
      <FontAwesomeIcon icon={faTimes} className="cursor-pointer mx-2" />
    </div>
  </div>
);

CartElement.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartElement;
