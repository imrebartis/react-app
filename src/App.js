/*jshint esversion: 6 */
import React from 'react';
import './App.css'; //IMPORTANT: ADD THE ./ IN FRONT OF THE FILE'S NAME!!!

class App extends React.Component {
  render(){
    return (
        <Buttons>
          <button value="A">A</button>
          <button value="B">B</button>
          <button value="C">C</button>
        </Buttons>
      )
  }
}

class Buttons extends React.Component {
  constructor(){
    super();
    this.state = {selected: 'None'}
  }
  selectItem(selected){ //this updates the state
    this.setState({selected})
  }
  render(){
  // props.children is a descriptor of the children, i.e. u can only read from it
  // that's why in order to modify it we need cloneElement    
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      })
    let items = React.Children.map(this.props.children, fn);
    return(
      <div>
        <h2>You have Selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default App
