import React, { Component } from 'react';
import './App.css';
import RecipeBox from './components/RecipeBox';

class Button extends Component{
  render(){
    return (
      <button>Add Recipe</button>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Recipe-Box</h2>
        </div>
        <p className="App-intro">
          This is a basic recipe box created using react js.
        </p>
        <RecipeBox />
        <Button />
      </div>
    );
  }
}

export default App;
