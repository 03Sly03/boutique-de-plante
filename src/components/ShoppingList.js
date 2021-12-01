import { plantList } from '../datas/plantList.js';

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
        )
        console.log(categories);
    return (
        <div>
            <h2>Catégories</h2>
            <ul>
                {categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
            </ul>
            <h2>Listes des plantes</h2>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>
                        {plant.name} {plant.isBestSale && plant.category === "classique" && <span> is Best Sale !</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList