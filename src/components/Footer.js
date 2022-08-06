import React, { useState } from 'react'

function Footer() {
    const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        setInputValue(e.target.value);
    }
    
    function handleBlur(value) {
        if (!value.includes('@') && value !== '') alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
    }

  return (
    <footer className='footer'>
        <label htmlFor='footer-mail'>Adresse mail</label>
        <input type="mail" name='footer-mail' id='footer-mail' placeholder='entrez votre adresse mail' value={inputValue} onChange={(e) => handleInput(e)} onBlur={(e) => handleBlur(e.target.value)}/>
    </footer>
  )
}

export default Footer