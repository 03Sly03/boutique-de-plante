import { plantList } from '../datas/plantList.js';
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
        )

    return (
        <div>
            <h2>Catégories</h2>
            <ul>
                {categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
            </ul>
            <h2>Listes des plantes</h2>
            <ul className='bdpc-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='bdpc-plant-item'>
                        {plant.name} {plant.isBestSale && plant.category === "classique" && <div className='bdpc-best-sale'>Best Sale !</div>}
                        {plant.isSpecialOffer ? <div className='bdpc-sales'>En solde !</div> : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList