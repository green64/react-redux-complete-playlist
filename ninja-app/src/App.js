import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
        { name: "Ryu", age: 15, belt: "black", id: 1 },
        { name: "Sam", age: 54, belt: "white", id: 2 },
        { name: "Steve", age: 58, belt: "blue", id: 3 }
      ]
}
//this function will add new ninja to state above
addNinja = (ninja) => {
  ninja.id = Math.random();
  //this uses spread operator ... to put objects into array thats carbon copy of above into
  let ninjas = [...this.state.ninjas, ninja];
  //add this ID to the state
  this.setState({
    ninjas: ninjas
  })
}
deleteNinja = (id) => {
  {/*filter method can check ids*/}
  let ninjas = this.state.ninjas.filter(ninja => {
    return ninja.id !== id
  });
  this.setState({
    ninjas: ninjas
  })
}
  render() {
    return (
      <div className="App">
       <h1>Not my first React app</h1>
       <p>Rock on</p>
       {/*passing deleteNinja as a prop below*/}
       {/* props allow us to pass properties from parent to child component */}
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
