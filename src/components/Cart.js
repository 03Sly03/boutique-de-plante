import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

function Cart({ cart, updateCart, addToCart }) {
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  const [isCartOpen, setIsCartOpen] = useState(true);

  function handleItemCartDelete(name) {
    updateCart(cart.filter((itemCart) => itemCart.name !== name));
  }

  function substracToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded && currentPlantAdded.amount > 1) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart(
        [
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantAdded.amount - 1 },
        ].sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    } else {
      handleItemCartDelete(name);
    }
  }

  useEffect(() => {
    window.localStorage.setItem('MyCart', JSON.stringify(cart));
  }, [cart]);

  return isCartOpen ? (
    <div className="bdpc-cart">
      <div className="bdpc-cart_btn-cart">
        <button
          className="bdpc-cart__btn-Open-Close"
          onClick={() => setIsCartOpen(false)}
        >
          Fermer le panier
        </button>
      </div>

      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          <p>
            <ImCross
              onClick={() => handleItemCartDelete(name)}
              style={{ cursor: 'pointer' }}
            />{' '}
            {name} {price}€{' '}
            <AiOutlineMinusCircle
              id="minus"
              style={{ cursor: 'pointer' }}
              onClick={(e) => substracToCart(name, price)}
            />{' '}
            {amount}{' '}
            <AiOutlinePlusCircle
              id="plus"
              style={{ cursor: 'pointer' }}
              onClick={(e) => addToCart(name, price)}
            />
          </p>
        </div>
      ))}

      <p>TOTAL : {total}€</p>
      <div className="bdpc-cart__btn-frame">
        <button className="bdpc-cart__btn" onClick={() => updateCart([])}>
          Vider le panier
        </button>
      </div>
    </div>
  ) : (
    <div className="bdpc-cart">
      <div className="bdpc-cart_btn-cart">
        <button
          className="bdpc-cart__btn-Open-Close"
          onClick={() => setIsCartOpen(true)}
        >
          Ouvrir le panier
        </button>
      </div>
      {/* <h3>Votre panier est vide !</h3> */}
    </div>
  );
}

export default Cart;
