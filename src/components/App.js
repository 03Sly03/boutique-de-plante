import { useState } from 'react';
import '../styles/app.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
// import Offers from './Offers';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';

function App() {
  const [cart, updateCart] = useState([]);
  console.log('le cart de App.js: ', cart);

  return (
    <div>
      <Banner />
      <div className='shop'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      {/* <Offers /> */}
      <QuestionForm />
      <Footer /> 
    </div>);
}

export default App;
