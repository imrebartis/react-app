/*jshint esversion: 6 */
import React from 'react';
class App extends React.Component {
  render(){
    let txt = this.props.txt;
    return (
      <div>
        <h1 className="murde">{txt}</h1>
      </div>
    )
  }
}

App.PropTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default" //this will show up only if App doesn't have a txt set in index.js
}



export default App
