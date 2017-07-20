// Video 16
//Build a JSX Live Compiler as a React Component
/**
 * In this lesson, we're going to create an in-browser JSX transpiler. Here, in our index.html of our 
 * create-react-app application, I'm bringing in the standalone version of Babel.
 */


 /**
  * This example works for see how when I add a new div or whatever is added in REact looks this: 
  *I added : 
  * <div className="example">inner text</div>
  *Result:
  *React.createElement("div",{ className: "example" },"inner text" );
  */
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, { presets: ['es2015', 'react']})
        .code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }
  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}/>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App

/** Example for jsx creation
 * /* add your jsx here                |       "use strict";
const App = (props) => {              |       var App = function App(props) {
  var myStyle={                       |         var myStyle={
    backgroundColor: '#000',          |           backgroundColor: '#000',
    height: 10                        |           height: 10
  }                                   |         };
  return (                            |         return React.createElement(
<div style={myStyle}>                 |           "div",
      <a href="#">                    |           { style: myStyle },
         notrendered="x"              |           React.createElement("a", { href: "#"
         onClick={update}>            |             notrendered: "x",
      this is the text                |             onClick: update }, 
      {i>1 ? 'More than one' : 'one'} |             "this is the text",
      </a>                            |             i > 1 ? 'More than one' : 'one'
    </div>                            |           )                            
  )                                   |          );  
}                                     |        };
 */
