import { useEffect, useState } from 'react';
import '../styles/app.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
// import Offers from './Offers';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';
import { plantList } from '../datas/plantList.js';

function App() {
  const retrievedItem = window.localStorage.getItem('MyCart');
  const [cart, updateCart] = useState(retrievedItem ? JSON.parse(retrievedItem) : []);
  const [plants, setPlants] = useState([]);
  const [isFooterShown, setIsFooterShown] = useState(true);
  const [catFilter, setCatFilter] = useState([]);

  function sortByCategory(category) {
    if (category) {
      const filterByCategory = plantList.filter(
        (plant) => plant.category === category
      )
      setPlants(filterByCategory);
    } else {
      setPlants(plantList);
    }
  }

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);

    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart(
        [...cartFilteredCurrentPlant, { name, price, amount: currentPlantAdded.amount + 1 }].sort((a, b) => a.name > b.name ? 1 : -1)
      )
    } else {
      updateCart([...cart, { name, price, amount: 1 }].sort((a, b) => a.name > b.name ? 1 : -1));
    }
  }

  function addCategoryToShop(category, checked) {
    if (checked) {
      const filterByCategory = plantList.filter(
        (plant) => plant.category === category
      )
      setCatFilter(catFilter.concat(filterByCategory));
      setPlants(catFilter.concat(filterByCategory).sort((a, b) => a.name > b.name ? 1 : -1));
    } else if (!checked && catFilter[0]) {
      const element = catFilter.filter(el => el.category !== category);
      setCatFilter(element);
      element[0] ? setPlants(element.sort((a, b) => a.name > b.name ? 1 : -1)) : setPlants(plantList.sort((a, b) => a.name > b.name ? 1 : -1));
    } else {
      // in case of bug: checked equal false and no catFilter array
      setPlants(plantList.sort((a, b) => a.name > b.name ? 1 : -1));
    }
  }

  useEffect(() => {
    setPlants(plantList.sort((a, b) => a.name > b.name ? 1 : -1));
  }, [])

  return (
    <div>
      <Banner />
      <div className='shop'>
        <Cart cart={cart} updateCart={updateCart} addToCart={addToCart} />
        <ShoppingList cart={cart} updateCart={updateCart} addToCart={addToCart} sortByCategory={sortByCategory} plants={plants} addCategoryToShop={addCategoryToShop} />
      </div>
      {/* <Offers /> */}
      <QuestionForm />
      <button onClick={() => setIsFooterShown(false)}>Cacher le footer</button>
      {isFooterShown && <Footer cart={cart} />}
    </div>);
}

export default App;
