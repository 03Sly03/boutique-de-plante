import '../styles/Banner.css'
import logo from '../assets/logo-bdpc.png'

function Banner() {
    const title = "Boutique de plantes carnivores !" 
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >=2 && currentMonth <=5
    const recommendation = isSpring ? (
        <div>C'est le printemps ! Rempotez !</div>
    ) : (
        <div>Ce n'est pas encore le moment de rempoter...</div>
    )
    
    return (
    <div className='bdpc-banner'>
        <div className='bdpc-banner-row'>
            <img src={logo} alt='boutique de plante carnivore' className='bdpc-logo' />
            <h1 className='bdpc-title'>{ title.toUpperCase() }</h1>
        </div>
        <div>
            {recommendation}
        </div>
    </div>
    )
}

export default Banner