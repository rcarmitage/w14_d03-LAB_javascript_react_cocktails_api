import React from 'react';

const CocktailDetail = (props) => {
  if (!props.cocktail) return null;
  return (
    <div>
      <h3>{props.cocktail.strDrink}</h3>
      <img src={props.cocktail.strDrinkThumb} height="200"/>
      <p>{props.cocktail.strInstructions}</p>
    </div>
  )
}

export default CocktailDetail;
