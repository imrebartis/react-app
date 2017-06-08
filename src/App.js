/*jshint esversion: 6 */
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt:'this is the state txt',
    }
  }

  update ( e ){
    this.setState({txt: e.target.value});
  }


  render(){
    return (
      <div>
        <h1 className="murde">{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

//The stateless function component Widget is a child component of the React component, it updates the state of its parent:
const Widget = (props) =>
  <input type="text" onChange={props.update}/>


export default App
