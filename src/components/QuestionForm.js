import React, { useState } from 'react';

function QuestionForm() {

    const [inputValue, setInputValue] = useState("Posez votre question ici");
    const isInputError = inputValue.includes('f');

    function handleSubmit(e) {
        e.preventDefault();
        alert("Vous avez écris : \n" + e.target['my_input'].value + "\n merci");
        alert("ah oui j'oubliais...");
        alert("Tchaoo !!!");
    }

    function checkValue(value) {
        setInputValue(value);
    }

    function checkResult(value) {
        if (!value.includes('f')) {
            setInputValue(value);
            alert("Vous n'avez pas tapé de \"f\". C'est cool. Voici ce que vous avez écris: \n" + value);
        } else {
            alert("🔥 Vous n'avez pas le droit d'utiliser la lettre \"f\" ici.");
        }
    }

    return (
        <div className='question-form'>
            <h2>Question Form</h2>
            <form onSubmit={handleSubmit} className='question-form__form'>
                <input type='text' name='my_input' defaultValue="Tapez votre texte" />
                <button type='submit'>Entrer</button>
            </form>
            <div className='question-form__form'>
                <textarea
                    value={inputValue}
                    onChange={(e) => checkValue(e.target.value)}
                />
                {isInputError && (
                    <div style={{ color: 'red' }}>Vous ne pouvez pas écrire de "f". C'est interdit !</div>
                )}
                <button onClick={() => checkResult(inputValue)}>Alertez moi 🚨</button>
            </div>
        </div>
    )
}

export default QuestionForm