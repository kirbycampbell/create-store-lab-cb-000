import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <ul>
        <li><input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(event) => this.handleChange(event)}
              placeholder="username" />
        </li>
        <li><input
              type="text"
              name="hometown"
              value={this.state.hometown}
              onChange={(event) => this.handleChange(event)}
              placeholder="hometown" />
        </li>
        </ul>
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
