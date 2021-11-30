import '../styles/Cart.css';

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    const total = monsteraPrice + ivyPrice + flowerPrice
    return (
        <div className='bdpc-cart'>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : { monsteraPrice }€</li>
                <li>Lierre : { ivyPrice }€</li>
                <li>Bouquet de fleurs : { flowerPrice }€</li>
                    </ul>
            <p>TOTAL : { total }€</p>
        </div>
    )
}

export default Cart