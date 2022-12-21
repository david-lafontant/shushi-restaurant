import React from 'react';
import PropTypes from 'prop-types';
import dish from '../../assets/img/icon-food1.svg';

const CartElement = ({ obj }) => (
  <div className="flex flex-row p-2 items-center bg-beige border justify-between">

    <img src={dish} alt={obj.name} className="border h-14 w-14" />

    <div>
      <p>{obj.name}</p>
      <p>{obj.price}</p>
      <p>{obj.source}</p>
    </div>

    <div>
      <p>
        <span>
          -
        </span>
        <span>
          1
        </span>
        <span>
          +
        </span>
      </p>
    </div>

    <div>
      <p>&times;</p>
    </div>
  </div>
);

CartElement.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    source: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartElement;
