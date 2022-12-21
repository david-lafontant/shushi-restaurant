import React from 'react';
import Button from '../../components/button/button';
import Sidebar from '../../components/sidebar/sidebar';
import CartElement from '../../components/cart/cartElement';

const cartObject = [];

for (let i = 0; i < 4; i += 1) {
  const obj = {
    name: `Dishes ${i + 1}`,
    price: Math.floor(Math.random() * (100) + 50),
    id: i,
  };
  cartObject.push(obj);
}

function Cart() {
  return (
    <div className="flex flex-row p-2 justify-evenly h-screen w-screen">
      <Sidebar />
      <div className="w-4/5">
        <h2 className="text-3xl font-bold">CART</h2>
        <div className="flex flex-row p-1 justify-evenly">
          <div className="w-1/2">
            {cartObject.map((item) => <CartElement key={item.id} obj={item} />)}
          </div>
          <div className="w-2/5">
            <div className="w-full bg-beige p-6 flex-col">
              <h3 className="font-bold text-2xl mb-4">Your Subtotal</h3>
              <p className="mb-3 ">
                <span>Subtotal $</span>
                <span>80.00</span>
              </p>
              <Button texte="Confirm order" />
            </div>
            <div className="w-full border border-beige p-6 flex flex-col">
              <h2 className="text-2xl">Promo Code</h2>
              <input
                type="text"
                name="promoCode"
                placeholder="Enter promo code"
                value="code"
                className="p-2 border mb-1 w-1/2"
              />
              <Button texte="Apply" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
