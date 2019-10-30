import React, { Component } from 'react';

const FavouriteCocktails = (props) => {


  const options = props.favouriteCocktails.map((cocktail, index) => {

    function handleClick() {
      props.onDeleteClick(cocktail)
    }

    return(
      <li key={index}>
      <p>{cocktail.strDrink}</p>
      <button onClick={handleClick}>Delete Cocktail</button>
      </li>
    )
  })

    return(
      <div>
        <h2>Favourite Cocktails</h2>
        {options}
      </div>
    )


}

export default FavouriteCocktails;
