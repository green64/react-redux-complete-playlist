import React, { Component } from 'react';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  }
  //single function will update all fields
  handleChange = (e) => {
    this.setState({
      //grab correct state property and match state property names
      [e.target.id]: e.target.value
    })
  }
    //this prevents page refresh which is default event
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
    //then log state to console
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">Age:</label>
          <input tupe="text" id="age" onChange={this.handleChange} />
          <label htmlFor="name">Belt:</label>
          <input tupe="text" id="belt" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinja