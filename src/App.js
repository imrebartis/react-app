/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom'; //we need this import in order to make the Input component work with ref a
class App extends React.Component {

  constructor(){
    super();
    this.state = {a: ''}
  }
  update(){
    this.setState({//thanks to this the two inputs and their states can be modified in the browser separately
      //we use two diff ways to get a reference to a component, see a and b
      a: this.a.refs.input.value, //the input here points to the ref='input' of the Input component
      b: this.refs.b.value
    })
  }
  render(){
    return ( //the h1 will print out the name of the event, e.g. paste
      <div>
        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        //ref={node => this.a = node} //this was used before creating the Input component
          //type="text"
          //onChange={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
        ref="b"
          type="text"
          onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    )
  }
}

class Input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}


export default App
