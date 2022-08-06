import React from 'react'
import CareScale from './CareScale.js';


function PlantItem({ id, category, cover, name, water, light, price, updateCart, isSpecialOffer, isBestSale, cart }) {
  function addToCart(name, price) {
    console.log('le cart: ', cart);
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    console.log('le currentPlantAdded: ', currentPlantAdded);
    if (currentPlantAdded) {
      console.log('Already added');
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      console.log('le cart Filtré: ', cartFilteredCurrentPlant);
      updateCart(
        [...cartFilteredCurrentPlant, {name, price, amount: currentPlantAdded.amount + 1}]
        )
        console.log('le cart après le filtre: ', cart);
    } else {
      console.log('Not added');
      updateCart([...cart, {name, price, amount: 1}]);
    }
  }
  return (
      <li
        key={`${id}-${name}`}
        className='bdpc-plant-item'
        // onClick={(e) => handleClick(e)}
      >
          <img src={cover} alt={`${name} cover`} className='bdpc-plant-item-cover' />
          {name} {isBestSale && category === "classique" && <div className='bdpc-best-sale'>Best Sale !</div>}
          {isSpecialOffer ? <div className='bdpc-sales'>En solde !</div> : null}
          <div>
            <CareScale careType='light' scaleValue={light} />
            <CareScale careType='water' scaleValue={water} />
          </div>
          <button className='bcpc-plant-item__add-to-cart' onClick={() => addToCart(name, price)}>Ajouter</button>
      </li>
  )
}

export default PlantItem