//Video 10
//Use React ref to Get a Reference to Specific Components
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: '', b: ''}
  }
  update(){
    this.setState({
      //check a ref in all virutal DOM 
      //find into ref a -> in all components, a input component value
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }
  //Se necesita agregar una referencia para saber a cual de los 2 states va afectar el update 
  /**Es por eso que se agrega el ref=b en el segundo input
   * el primero es un ejemplo de como usar un ref dentro de diferentes componentes 
   * 
   */
  render(){
    return (
      <div>
        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        /><h2>{this.state.a}</h2> 
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
          /> <h2>{this.state.b}</h2>
      </div>
    )
  }
}

class Input extends React.Component {
  render(){//Asing ref into input in component
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

export default App
