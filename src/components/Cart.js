import React from "react";

function Cart({ cart, updateCart }) {
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )

    return (
        <div className='bdpc-cart'>
            <h2>Panier</h2>
                {
                    cart.map(({ name, price, amount }, index) => (
                        <div key={`${name}-${index}`}>{name} {price}€ x {amount}</div>
                    ))
                }

            <p>TOTAL : {total}€</p>
            <div className="bdpc-cart__btn-frame">
            <button className="bdpc-cart__btn" onClick={() => updateCart([])}>Vider le panier</button>
            </div>
        </div>
    )
}

export default Cart