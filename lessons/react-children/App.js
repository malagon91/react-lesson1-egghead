// Video 18 
 //Understand React.Children Utilities
/**
 * In a number of situations, you may want to iterate over the children of your components. 
 * To illustrate that, I'm going to say let items = this.props.children. I'm going to map over those. 
 * I'm going to take in a child and return the same child. We'll log out our items.
 */

import React from 'react';

class App extends React.Component {
  render(){
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

//In the next code we can see differents ways to itareate into childs components 
class Parent extends React.Component {
  render(){
    //console.log(this.props.children)
    // let items = React.Children
    //    .forEach(this.props.children,
    //    child => console.log(child.props.className)) //this works only if tha parent has a one child
    let items = React.Children.toArray(this.props.children)
    //let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default App
