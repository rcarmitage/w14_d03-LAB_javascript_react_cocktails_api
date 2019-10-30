import React from 'react';

const FavouriteCocktails = (props) => {


  const options = props.favouriteCocktails.map((cocktail, index) => {

    function handleClick() {
      props.onDeleteClick(cocktail)
    }

    function handleClickChange() {
      props.onFavouriteSelected(cocktail);
    }

    return(
      <li id="favourites-list" key={index}>
        <p onClick={handleClickChange}>{cocktail.strDrink}<button onClick={handleClick}>Delete Cocktail</button></p>

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
