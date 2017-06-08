/*jshint esversion: 6 */
import React from 'react';
class App extends React.Component {
  render(){
    return <button>I <Heart /> React</button>
  }
}
//props.children allows both text value & the nested component (Heart) to flow on through into our HTML button
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}

export default App
