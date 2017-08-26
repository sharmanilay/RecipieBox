import React, { Component } from 'react';

class RecipeListItem extends Component {
  render() {
    return (
      <li>{this.props.children}</li>
    );
  }
}
export default RecipeListItem;
