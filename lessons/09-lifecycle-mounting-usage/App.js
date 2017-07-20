// Video 12
//Manage React Component State with Lifecycle Methods

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1 })
  }
  componentWillMount(){
    console.log('componentWillMount')
    this.setState({m: 2})
  }
  render(){
    console.log('render')
    return (
      <button onClick={this.update}>
        {this.state.val * this.state.m}
      </button>
    )
  }
  componentDidMount(){
    console.log('componentDidMount')
    //whit whit option the method be call multiple times to app componet
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
    //Set in Zero this. inc
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
        <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>Unmount</button>
          <div id="a"></div>
        </div>
    )
  }
}


export default Wrapper
