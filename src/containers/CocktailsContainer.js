import React, { Component } from 'react';
import CocktailSelector from '../components/CocktailSelector';
import CocktailDetail from '../components/CocktailDetail';
import FavouriteCocktails from '../components/FavouriteCocktails';

class CocktailsContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      cocktails: [],
      currentCocktail: null,
      favouriteCocktails: []
    };
    this.handleCocktailSelected = this.handleCocktailSelected.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(res => res.json())
    .then(data => this.setState({ cocktails: data.drinks }))
  }

  handleCocktailSelected(idDrink){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then(res => res.json())
      .then(data =>this.setState({ currentCocktail: data.drinks[0] }))
  }
  handleDelete(cocktail) {
    console.log('cocktail', cocktail)
    const index = this.state.favouriteCocktails.indexOf(cocktail)
    const before = this.state.favouriteCocktails.slice(0, index)
    const after = this.state.favouriteCocktails.slice(index+1, this.state.favouriteCocktails.length)
    const newArray = [...before, ...after]
    this.setState({favouriteCocktails: newArray})
  }

  handleButtonClick(){
    if (!this.state.favouriteCocktails.includes(this.state.currentCocktail)){
    this.setState({
      favouriteCocktails: [...this.state.favouriteCocktails, this.state.currentCocktail]
    })
  }
  }

  render(){
    return(
      <div>
        <div>
          <h2>Cocktails</h2>
          <CocktailSelector cocktails={this.state.cocktails} onCocktailSelected={this.handleCocktailSelected} />
          <CocktailDetail cocktail={this.state.currentCocktail} />
        </div>
        <button onClick={this.handleButtonClick}>Add to Favourites</button>
        <div>
          <FavouriteCocktails onDeleteClick={this.handleDelete} favouriteCocktails={this.state.favouriteCocktails} />
        </div>
      </div>
    )
  }

}

export default CocktailsContainer;
