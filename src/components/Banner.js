import '../styles/Banner.css'
import logo from '../assets/logo-bdpc.png'

function Banner() {
   const title = "Boutique de plantes carnivores !" 
    return (
    <div className='bdpc-banner'>
        <img src={logo} alt='boutique de plante carnivore' className='bdpc-logo' />
        <h1 className='bdpc-title'>{ title.toUpperCase() }</h1>
    </div>
    )
}

export default Banner