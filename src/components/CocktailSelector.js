import React from 'react';

const CocktailSelector = (props) => {
  const options = props.cocktails.map((cocktail, index) => {
    return <option value={cocktail.idDrink} key={index}>{cocktail.strDrink}</option>
  })

  function handleChange(event) {
    props.onCocktailSelected(event.target.value);
  }

  return (
    <select id="cocktail-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a cocktail...</option>
      {options}
    </select>
  )
}

export default CocktailSelector;
