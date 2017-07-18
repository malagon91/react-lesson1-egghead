// problematic in JsBin

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
    //This process only is executed one time before the first render
    console.log('componentWillMount')
  }
  render(){//this process is executed several times after each click
    console.log('render')
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentWillUnmount(){
    //This process execute after render an only one time
    console.log('componentWillUnmount')
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
  /**
   * The first button create a new app component 
   * the second button unmount appcomponent
   */
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
