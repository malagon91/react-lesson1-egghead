//Video 6
//Use React Components as Children for Other Components
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){//in Widget call we set the prop with ours update function 
    //WE call Button component and that component assing insade the component all we set in Button call
    //<Button>I <Heart/> React</Button>
    return (
      <div>
        
        <Button>I <Heart/> React</Button>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}
//CREate a new component that we have all insade
const Button =(props) => <button>{props.children}</button>

class Heart extends React.Component {
  render (){
    return <span>&hearts;</span>
  }
}

//I create a new component for use hoc child component in our big component
//we get the props.update how a propertie and in onchange method call the function we have 
//this is a example for a dump component he only gets a function and executed that but not knows anything
const Widget = (props) =>
  <input type="text" onChange={props.update}/>

export default App
