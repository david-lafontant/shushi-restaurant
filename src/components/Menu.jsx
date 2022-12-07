import React from 'react';

const Menu = (id, image, name) => (
  <div className="productList">
    <div key={id} className="productCard">
      <img
        src={image}
        alt="product-img"
        className="productImage"
      />

      <div className="productCard__content">
        <h3 className="productName">{name}</h3>
      </div>
    </div>
  </div>
);

export default Menu;
