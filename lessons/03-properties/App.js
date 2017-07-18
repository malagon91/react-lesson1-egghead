/*Video 4
 */
//how assgin properties in react component


import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}
App.propTypes = {
  //Assing prop type
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}
App.defaultProps ={
  //default values for prop values
  //If not assing anything in prop the value is the assgined here
  txt: 'this is the default txt'
}
ReactDOM.render(
  <App cat={5} txt='My custom value' />,
  document.getElementById('app')
);
