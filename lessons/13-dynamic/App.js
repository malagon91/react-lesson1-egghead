/**
 * Video 14 
 */

 /**
  * In this lesson, we're going to talk about iterating over a data set in order 
  to create our JSX. Right here in our render method, right before our return statement,
   I'm going to say let items = this.state.items. That's going to set that data up.
  */
  /**
   * this example is very exited maybe I can try added Rxjs for api call 
   */
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    //This process only is executed one time before the first render
    //when our component is loaded this method load all items in API call
    fetch( 'https://swapi.co/api/people/?format=json' )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }
  filter(e){
    //we assing a value for filter state 
    this.setState({filter: e.target.value})
  }
  render(){
    //the render load all times  what event is called, like before example
    let items = this.state.items;
    //if filter state is empty the component load all names
    if(this.state.filter){
      items = items.filter( item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
    }
    return (// the code "{items.map(item =>" is like a foreach and load all names in screen
      <div>
        <input type="text"
        onChange={this.filter.bind(this)}/>
        {items.map(item =>
          <Person key={item.name} person={item} />)}
      </div>
    )//when we added items with a foreach that need a key <Person key={item.name}
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default App
