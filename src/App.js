/*jshint esversion: 6 */
import React from 'react';
import './App.css'; //IMPORTANT: ADD THE ./ IN FRONT OF THE FILE'S NAME!!!

class App extends React.Component {
  render(){
    return (
        <Parent>
          <div className="childA"></div>
          <div className="childB"></div>
        </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    //the React.Children method takes as an argument the actual children and then a mapping function
    // let items = React.Children
    // .map(this.props.children, child => child)

    // let items = React.Children.toArray(this.props.children) //mapping the children with less code

    //printing out the class names of the children with forEach:
    let items = React.Children
      .forEach(this.props.children, child => console.log(child.props.className))

    //the method below (only) returns a single child. If it's more than one child, it will throw an error.
    // let items = React.Children.only(this.props.children)

    console.log(items)
    return null
  }
}


export default App
