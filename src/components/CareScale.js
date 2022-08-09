import React from 'react';
import water from '../assets/water.svg';
import sun from '../assets/sun.svg';

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3];
    const type = careType === 'light' ? (<img src={sun} alt="sun-icon" />)
    :
    (<img src={water} alt="water-icon" />);
    

    function handleCareTypePlantInfos(scaleValue, careType) {
      let require = '';
      if (scaleValue <= 1) {
        require = 'peu';
      } else if (scaleValue === 2) {
        require = 'modérement';
      } else {
        require = 'beaucoup';
      }
      alert(`Cette plante requière ${require} ${careType === 'light' ? 'de lumière' : "d'arrosage"}.\nIl s'agit d'un composant CareScale de type "${careType}"`);
    }

  return (
    <div className='light-and-water light-and-water__tooltip' onClick={() => handleCareTypePlantInfos(scaleValue, careType)}>
        {
            range.map(rangElement => scaleValue >= rangElement ? <span key={rangElement.toString()}>{type}</span> : null)
        }
    </div>
  )
}
export default CareScale