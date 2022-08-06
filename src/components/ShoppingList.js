import { plantList } from '../datas/plantList.js';
import PlantItem from './PlantItem.js';

function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    return (
        <div>
            <ul>
                {categories.map((cat, index) => (
                    <li key={`${cat}-${index}`}>{cat}</li>
                ))}
            </ul>
            <ul className='bdpc-plant-list'>
                {plantList.map(({ id, category, cover, name, water, light, price, isSpecialOffer, isBestSale }) => (
                    <PlantItem
                        key={id + name}
                        id={id}
                        category={category}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        price={price}
                        isSpecialOffer={isSpecialOffer}
                        isBestSale={isBestSale}
                        updateCart={updateCart}
                        cart={cart}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList