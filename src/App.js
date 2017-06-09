/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; //IMPORTANT: ADD THE ./ IN FRONT OF THE FILE'S NAME!!!

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
    })
  }

  render(){
  //the +this.state.red coerces the value into a number
  // we can turn the slider into numbers with type="number"
    return (
        <div>
          <NumInput
          ref="red"
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          label="Red"
          update={this.update} />
        </div>
      );
  }
}

class NumInput extends React.Component {

  render(){
    let label = this.props.label !== '' ?
    <label>{this.props.label} - {this.props.val}</label> : ''
    return(
      <div>
        <input ref="inp"
        type={this.props.type}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.val}
        onChange={this.props.update} />
        {label}
      </div>
    )
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range']) //an array that accepts 'number' or 'range' as a string
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  steop: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App
