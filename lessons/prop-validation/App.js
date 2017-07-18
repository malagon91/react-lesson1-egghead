// Video 8
//Add Custom propType Validation to React Components

import React from 'react';

class App extends React.Component {
  render(){
    return <Title text='custom value'/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    //Valid prop has a value
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    //Valid the prop has a valid length
    if(props[propName].length < 6){
      return new Error(`${propName} was too short`)
    }
  }
}

export default App
