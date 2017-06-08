/*jshint esversion: 6 */
import React from 'react';
// class App extends React.Component {//the comments below are diff ways of rendering the h1
//   render(){
//     return React.createElement('h1', null,'hurdel gurdel' )
//     //unlike in html, class is here className
//     //return <h1 className="murde">Hurde Gurde</h1>
//   }
// }

//this is a stateless function component, not as useful as the class App solution:
const App = () => <h1>Hurde gurde</h1>
export default App
