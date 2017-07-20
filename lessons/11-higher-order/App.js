// Video 15
/**
 * Compose React Component Behavior with Higher Order Components
 */
/**In this lesson, we're going to talk about higher order components. 
 * To get us started, I've got a simple App component here. 
 * It's outputting a Button component as well as a Label component. 
 * The Button component is a stateless function component, 
 * and it outputs props.children as its content. 
 * The label component is a full class component,
 *  and it also outputs this.props.children as its content.
 * 
 */

import React from 'react';
//Higher order component HOC
//Create a higher order component (HOC)
const HOC = (InnerComponent) => class extends React.Component {
  constructor(){
    super();
    this.state = {count: 0}
  }
  update(){
    this.setState({count: this.state.count + 1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
      />
    )
  }
}
//End HOC

class App extends React.Component {
  render(){
    return (
      <div>
        <Button>button</Button>
        <hr/>
        <LabelHOC>label</LabelHOC>
        <hr/>
        <SpanHOC>Span</SpanHOC>
      </div>
    )
  }
}
//here we render our new component HOC
const Button = HOC((props) => 
<button onClick={props.update}>{props.children} - {props.count} </button>
)

//this class also called by HOC check the reference into both child  component (Button,Label)
class Label extends React.Component {
  componentWillMount() {
    console.log('label will mount')
  }
  render(){
    return (
      <label onMouseMove={this.props.update}>
      {this.props.children} - {this.props.count}
      </label>
    )
  }
}
class MyCustomComponent extends React.Component{
  componentWillMount(){
    console.log('My third component loads')
  }
  render(){
    return (
      <span onClick={this.props.update}>{this.props.children} + {this.props.count}</span>
    )
  }
}

const SpanHOC = HOC(MyCustomComponent)
const LabelHOC = HOC(Label)
/**
 * this way is like the Button component way 
 * const LabelHOC = HOC(Label) = const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)
 */

export default App
/**
 * The purpose of a higher order component is to share common functionality or information 
 * between multiple components. The sole function of a higher order component is to take in 
 * a component and return a new component. We're going to go ahead and call our higher order 
 * component HOC. It's going to take in that InnerComponent, and it's going to return class 
 */

 /** spread operation 
  *  this operation is used to added new elements into a array 
  Example 
let first = [1, 2, 3];
let second = [4, 5, 6];
first.push(second)
result: {1,2,3,{4,5,6}} This result without using spread expresion 
Correct 
first.push(...second); 
result: {1,2,3,4,5,6} This way is the correct because it concatenate all content from both arrarys

  * {...this.props}
     * {...this.state}
  */