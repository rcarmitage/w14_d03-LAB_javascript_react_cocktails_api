import React from 'react';

const CocktailDetail = (props) => {
  if (!props.cocktail) return null;
  return (
    <h3>{props.cocktail.strDrink}</h3>
  )
}

export default CocktailDetail;
