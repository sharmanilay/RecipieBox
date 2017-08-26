import React, { Component } from 'react';
import RecipeBanner from './RecipeBanner';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class RecipeBox extends Component {
  constructor(props){
    super(props);
    this.state ={
      item: []
    }
  }
  getInitialState(){
    return  {
      items: []
    };
  }
  updateItems(newItem) {
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }
  render(){
    return (
      <div>
        <RecipeBanner />
        <RecipeList items={this.state.items}/>
        <RecipeForm onFormSubmit={this.updateItems}/>
      </div>
    );
  }
}

export default RecipeBox;
