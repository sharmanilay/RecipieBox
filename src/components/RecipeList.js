import React,{Component} from 'react';
import RecipeListItem from './RecipeListItem';

class RecipeList extends Component {
  render() {
    var createItem = function(itemText) {
      return (
        <RecipeListItem>{itemText}</RecipeListItem>
      );
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

export default RecipeList;
