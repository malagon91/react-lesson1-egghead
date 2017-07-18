//Video 5
/* Create states 
Unlike props, which are a collection of values that are meant to be 
passed into our component as static value, 
it's not meant to be changed by our component. 
State represents a collection of values that is meant to be managed,
 as well as updated by our component.
*/

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    //that is called state but i think it's only a variable whit the capacity to be modified
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update(e){//this event is executed when the input changed
    console.log(e);
    this.setState({txt: e.target.value})
  }
  render(){/**When the input is been modified sends his value to update method */
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)} />
          <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )//I don't know why the update method calls bind function. I think is for bind the value with component
  }
}

export default App
