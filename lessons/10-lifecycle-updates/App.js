// Video 13
//Control React Component Updates When New Props Are Received

//how use lifecicle for update states 

/**
 * En este ejemplo se autoincrementa la prop val y caundo es multiplo de 5 se muestra en el obton 
 * con el metodo componentDidUpdate imprimes el valor que antes tenia la propiedad
 */

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {increasing: false}
  }
  update(){
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('root'))
  }
    //this method get the next prop before the component revived them
  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render(){
    console.log(this.state.increasing)
    return (
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
  //Imprimer la propiedad anterior
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)
  }
}

App.defaultProps = {val: 0}

export default App

/**
 * The React component lifecycle will allow you to update your components at runtime. 
 * This lesson will explore how to do that. componentWillReceiveProps gives us an opportunity 
 * to update state by reacting to a prop transition before the render() call is made. 
 * shouldComponentUpdate allows us to set conditions on when we should update a 
 * component so that we are not rendering constantly. componentDidUpdate lets us react to a 
 * component updating.
 */
