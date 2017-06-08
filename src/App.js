/*jshint esversion: 6 */
import React from 'react';
class App extends React.Component {
  constructor(){
    //unlike props, state is for values meant to be managed & updated by our components
    super(); //super gives 'this' the context within our component
    this.state = {
      txt:'this is the state txt',
      cat: 0
    }
  }

  update ( e ){
    this.setState({txt: e.target.value});
    //if we want to update cat as well, we need this:
    //this.setState({cat: e.target.value});
  }


  render(){

    return (//two-way binding:
      <div>
        <h1 className="murde">{this.state.txt} - {this.state.cat}</h1>
        <input type="text" onChange={this.update.bind(this)}/>
      </div>
    )
  }
}




export default App
