/*jshint esversion: 6 */
import React from 'react';

class App extends React.Component {
  constructor() {
      super();
      this.state = {items: []}
    }
    componentWillMount(){//AJAX call to the Star Wars API:
      fetch('http://swapi.co/api/people/?format=json')
        .then( response => response.json() ) //we get the data back
        .then( ({results: items}) => this.setState({items})) // we call the data items and set our state of items to that value.
    }
    filter(e){
      this.setState({filter: e.target.value})
    }
    render(){//the item.name key here is to get rid of an error message about the necessity of having a key for each child
      let items = this.state.items; //setting the data up
      if(this.state.filter){
        items = items.filter( item =>
        item.name.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
      }
      return (
        <div>
          <input type="text"
          onChange={this.filter.bind(this)}/>
          {items.map(item =>
            <Person key={item.name} person={item} />)}
        </div>
      )
 }

}

const Person = (props) => <h4>{props.person.name}</h4>

export default App
