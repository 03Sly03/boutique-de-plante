import React from 'react';
import { MdSettingsBackupRestore } from 'react-icons/md';

function Categories({ sortByCategory, addCategoryToShop, categories }) {

    function setBtnDefault() {
        let options = document.getElementById("select").options;

        for (let i = 0; i < options.length; i++) {
            options[i].selected = false;
        }
        sortByCategory(false);
    }

    return (
        <div>
            <fieldset id='fieldlist'>
                <legend>Choose your plant's category:</legend>

                {
                    categories.map((category, index) =>
                        <div key={`${category}-${index}`}>
                            <input type="checkbox" id="{category}" name='category' value={category} onClick={(e) => addCategoryToShop(e.target.value, e.target.checked)} />
                            <label htmlFor={category}>{category}</label>
                        </div>
                    )
                }


            </fieldset>
            <select className='categories__select' id='select'>
                <option defaultValue="" onClick={(e) => sortByCategory(false)}>--Choisissez une catégorie--</option>
                {
                    categories.map((category, index) => <option key={`${category}-${index}`} value={category} onClick={(e) => sortByCategory(e.target.value)}>{category}</option>)
                }

            </select>
            <MdSettingsBackupRestore className='categories__reset-btn' onClick={() => setBtnDefault()} />
        </div>
    )
}

export default Categories