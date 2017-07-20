//Video 20

/**
 * Use React.cloneElement to Extend Functionality of Children Components
 * 
 *  We can utilize React.cloneElement in order to create new components with extended data or functionality.

 */
/**
 * this example can works when I need add a child componnets that they need call the same function but with 
 * different params
 */
import React from 'react';

class App extends React.Component {
  render(){
    return (//The buttons are passed how innerelements inside Buttons component
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
        <button value="D">D</button>
      </Buttons>
    )
  }
}


class Buttons extends React.Component {
  constructor(){
    super();
    this.state = {selected: 'None'}
  }
  selectItem(selected){
    this.setState({selected})
  }
  render(){
      let fn = child =>
      //first element is the element that well be afect
      //the second argument is how we want to extend that.
        React.cloneElement(child, {
          onClick:this.selectItem.bind(this, child.props.value)
        })
        console.log(fn)
      let items = React.Children.map(this.props.children, fn);
      return (
        <div>
          <h2>You have selected: {this.state.selected}</h2>
          {items}
        </div>
      )
  }
}
//var items has all buttons inside the Button component
export default  App
