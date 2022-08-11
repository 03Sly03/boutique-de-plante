import Categories from './Categories.js';
import PlantItem from './PlantItem.js';

function ShoppingList({ cart, updateCart, addToCart, sortByCategory, plants, addCategoryToShop, categories }) {
    return (
        <div className='shopping-list'>
            <div className="shopping-list__select-category-btn">
                <Categories sortByCategory={sortByCategory} addCategoryToShop={addCategoryToShop} categories={categories} />
            </div>
            <ul className='bdpc-plant-list'>
                {plants.map(({ id, category, cover, name, water, light, price, isSpecialOffer, isBestSale }) => (
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
                        addToCart={addToCart}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList