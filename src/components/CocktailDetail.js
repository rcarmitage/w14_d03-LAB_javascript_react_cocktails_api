import React from 'react';



const CocktailDetail = (props) => {

  const ingredients = []

  const addIngredient= function(cocktail){
    if (props.cocktail.strIngredient1.value != null) {return ingredients.push(cocktail)}

}


  if (!props.cocktail) return null;
  return (
    <div>
      <h3>{props.cocktail.strDrink}</h3>
      <marquee bgcolor="yellow-green" direction="right">
        <img src={props.cocktail.strDrinkThumb} height="200"/>
      </marquee>
      <p>Ingredients: {props.cocktail.strIngredient1},
          {props.cocktail.strIngredient2},
          {props.cocktail.strIngredient3},
          {props.cocktail.strIngredient4},
          {props.cocktail.strIngredient5}
      </p>
      <p>Instructions: {props.cocktail.strInstructions}</p>
    </div>
  )
}

export default CocktailDetail;
