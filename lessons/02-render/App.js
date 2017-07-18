//Video 2 ,3
import React from 'react';

class App extends React.Component {
  render(){
    //this is a one way to create a element with react 
    //return React.createElement('h1',null,'Hello world')
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    );
    //the return only return a one element because that all is inside the div

  }
}

export default App
