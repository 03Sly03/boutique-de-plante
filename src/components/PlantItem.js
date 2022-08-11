import React from 'react'
import CareScale from './CareScale.js';


function PlantItem({ id, category, cover, name, water, light, price, isSpecialOffer, isBestSale, addToCart }) {

  return (
    <li
      key={`${id}-${name}`}
      className='bdpc-plant-item'
    >
      <img src={`../images/${cover}.jpg`} alt={`${name} cover`} className='bdpc-plant-item-cover' />
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