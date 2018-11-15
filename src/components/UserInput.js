import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return(
      <div>
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

export default UserInput;
