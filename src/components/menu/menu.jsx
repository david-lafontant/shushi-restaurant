import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ id, image, name }) => (
  <div key={id} className="rounded overflow-hidden">
    <img src={image} alt="menu-img" className="w-full" />

    <div className="px-6 py-4">
      <h3 className="font-bold text-xl mb-2 text-center">{name}</h3>
    </div>
  </div>
);
Menu.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,

};
Menu.defaultProps = {
  id: 1,
  name: 'Eri',
  image: '',
};
export default Menu;
