import React from 'react';

const Menu = (id, image, name) => (
  <div className="menuList">
    <div key={id} className="menuCard">
      <img
        src={image}
        alt="menu-img"
        className="menuImage"
      />

      <div className="menuCard__content">
        <h3 className="menuName">{name}</h3>
      </div>
    </div>
  </div>
);

export default Menu;
