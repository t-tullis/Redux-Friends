import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends Component {
    state = {
      name: '',
      age: '',
      email: ''
    };

  handleAddFriend = (e) =>{
      e.preventDefault();
    this.props.addFriend(this.state)
    this.setState({name:"", age: "", email: ""})
  }

  handleInputChange = e => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState({ 
        [e.target.name]: value
   });
  };

  render() {
    return (
      <div className="friend-Form">
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="email"
            value={this.state.email}
            name="email"
          />
          <button onClick={this.handleAddFriend} type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}


export default connect(
    null,
     { addFriend}
  )(AddFriend);