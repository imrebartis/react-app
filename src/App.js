/*jshint esversion: 6 */

// When our component is added to the DOM, this is called mounting, and when our component is removed from the DOM, this is called unmounting.

import React from 'react';
import ReactDOM from 'react-dom'; //we need this for mounting
class App extends React.Component {
  constructor() {
    super(); //we need super to get our context
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
  console.log('componentWillMount')
}
  render(){
    console.log('render');
    return <button onClick={this.update}>
      {this.state.val * this.state.m} // multiplying by two
    </button>
  }
  componentDidMount(){
  console.log('componentDidMount');
  this.inc = setInterval(this.update,500)
  }
  componentWillUnmount(){
  console.log('componentWillUnmount')
  this.setState({m: 2})
 }
}

class Wrapper extends React.Component {

      mount(){
      //for some reason creating the new div called a doesn't work
      ReactDOM.render(<App />, document.getElementById('root'))
      }
      unmount(){
      //for some reason creating the new div called a doesn't work
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
       clearInterval(this.inc);
      }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
      </div>
    )
  }
}

export default Wrapper //we export Wrapper instead of App. Then Wrapper will render App.
