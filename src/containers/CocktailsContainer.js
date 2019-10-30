import React, { Component } from 'react';
import CocktailSelector from '../components/CocktailSelector';
import CocktailDetail from '../components/CocktailDetail';

class CocktailsContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      cocktails: [],
      currentCocktail: null
    };
    this.handleCocktailSelected = this.handleCocktailSelected.bind(this);
  }

  componentDidMount(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(res => res.json())
    .then(data => this.setState({ cocktails: data.drinks }))
  }

  handleCocktailSelected(index){
    if (this.state.cocktails.length === 0) return null;
    const selectedCocktail = this.state.cocktails[index];
    this.setState({ currentCocktail: selectedCocktail })
  }

  render(){
    return(
      <div>
        <h2>Cocktails</h2>
        <CocktailSelector cocktails={this.state.cocktails} onCocktailSelected={this.handleCocktailSelected} />
        <CocktailDetail cocktail={this.state.currentCocktail} />
      </div>
    )
  }

}

export default CocktailsContainer;
