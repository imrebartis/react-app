/*jshint esversion: 6 */
import React from 'react';
import './App.css'; //IMPORTANT: ADD THE ./ IN FRONT OF THE FILE'S NAME!!!

class App extends React.Component {
  constructor(){
    super(); //super gives 'this' the context within our component
    this.state = {
      input:'/* add your jsx here */',
      output: '',
      err: ''
    }
  }

  update ( e ){
    let code = e.target.value;
    try {
      this.setState(
        {
          output: window.Babel
          .transform(code, {presets: ['es2015', 'react']}) //saying window.babel to transform our code using these presets, and then give us that code back
          .code,
          err: '' //err is empty here, because it's the scenario where code doesn't fail
        })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }


  render(){

    return (//two-way binding:
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}/>
            <pre>
              {this.state.output}
            </pre>
        </div>
      </div>
    )
  }
}




export default App
