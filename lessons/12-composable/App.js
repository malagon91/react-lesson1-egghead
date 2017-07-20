// Video 20
// Write More Reusable React Components with Composable APIs
//  To make more composable React components, you can define common APIs for similar component types.
/**
 * When creating React components one key tenet should be that your components should be reusable as well as 
 * composable. Now here in our code view we've got the Slider component that we created in the refs video, 
 * so hopefully you guys saw that, but basically we've got these Slider components that we can drag around and 
 * they update their value.
 */
import React from 'react';
import ReactDOM from 'react-dom';
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
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    })
  }

  /**
   * En este video se mandan llamar todas las opciones de un input dnetro de un componente de esta forma 
   * tenemos un componente mas reusable que se puede llamar de muchas formas siempre y cuando mandemos los parametros
   * correctos
   * 
   */
  render(){
    return (
      <div>
        <NumInput
          ref="red"
          min={0}
          max={255}
          step={0.01}
          val={+this.state.red}
          label="Red"
          update={this.update} />
          <NumInput
          ref="red"
          min={0}
          max={255}
          step={0.01}
          val={+this.state.red}
          label="Red"
          type= "number"
          update={this.update} />
      </div>
    );
  }
}

class NumInput extends React.Component {
  render(){
    let label = this.props.label !== '' ?
      <label>{this.props.label} -  {this.props.val}</label> : ''
    return (
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
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}


export default App
