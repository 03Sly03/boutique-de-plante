import { useEffect, useState } from 'react';
import '../styles/main.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';
import { dbPlantList } from '../datas/plantList';
// import axios from 'axios';

function App() {
  const retrievedItem = window.localStorage.getItem('MyCart');
  const [cart, updateCart] = useState(
    retrievedItem ? JSON.parse(retrievedItem) : []
  );
  const [plants, setPlants] = useState([]);
  const [isFooterShown, setIsFooterShown] = useState(true);
  const [catFilter, setCatFilter] = useState([]);
  const [plantList, setPlantList] = useState([]);

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function sortByCategory(category) {
    if (category) {
      const filterByCategory = plantList.filter(
        (plant) => plant.category === category
      );
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
      );
      updateCart(
        [
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantAdded.amount + 1 },
        ].sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    } else {
      updateCart(
        [...cart, { name, price, amount: 1 }].sort((a, b) =>
          a.name > b.name ? 1 : -1
        )
      );
    }
  }

  function addCategoryToShop(category, checked) {
    if (checked) {
      const filterByCategory = plantList.filter(
        (plant) => plant.category === category
      );
      setCatFilter(catFilter.concat(filterByCategory));
      setPlants(
        catFilter
          .concat(filterByCategory)
          .sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    } else if (!checked && catFilter[0]) {
      const element = catFilter.filter((el) => el.category !== category);
      setCatFilter(element);
      element[0]
        ? setPlants(element.sort((a, b) => (a.name > b.name ? 1 : -1)))
        : setPlants(plantList.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else {
      // in case of bug: checked equal false and no catFilter array
      setPlants(plantList.sort((a, b) => (a.name > b.name ? 1 : -1)));
    }
  }

  useEffect(() => {
    //   axios
    //     .get('http://localhost:3001/plantList')
    //     .then(function (response) {
    //       console.log(response.data);
    //       setPlantList(response.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    //       setPlants(response.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    setPlantList(dbPlantList.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setPlants(dbPlantList.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }, []);

  return (
    <div>
      <Banner />
      <Cart cart={cart} updateCart={updateCart} addToCart={addToCart} />
      <div className="shop">
        <ShoppingList
          cart={cart}
          updateCart={updateCart}
          addToCart={addToCart}
          sortByCategory={sortByCategory}
          plants={plants}
          addCategoryToShop={addCategoryToShop}
          categories={categories}
        />
      </div>
      <QuestionForm />
      <button onClick={() => setIsFooterShown(false)}>Cacher le footer</button>
      {isFooterShown && <Footer cart={cart} />}
    </div>
  );
}

export default App;
