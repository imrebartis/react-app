/*jshint esversion: 6 */
import React from 'react';
class App extends React.Component {
  render(){
    return <Title text="Hurd"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  // props is all the props that our components received, propName is the name for this particular prop
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} was too short`)
    }
  }

}

export default App
