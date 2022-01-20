import React, { Component } from "react";

export default class PostApi extends Component {
  state = {
    inputs: [],
  };

  constructor() {
    super();
    this.setState({inputs: })
  }
  render() {
    return (
      <>
        <form autoComplete="off">
          <div>
            <label for="username">Username</label>
            <input
              placeholder="Username"
              id="username"
              name="username"
              value={this.state.inputs.username}
              className="Inputs"
            />
          </div>
        </form>
      </>
    );
  }
}
