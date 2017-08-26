import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class RecipeForm extends Component {
  getInitialState(){
    return {item: ''};
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({item: ''});
    ReactDOM.findDOMNode(this.refs.item).focuse();
    return;
  }
  onChnage(e){
    this.setState({
      item: e.tagert.value
    });
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
        <input type='submit' value='Add'/>
      </form>
    );
  }
}
export default RecipeForm;
