import React, { Component } from "react";

export default class PostApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      sname: "",
      email: "",
    };
  }
  ChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  SubmitHandler(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { username, sname, email } = this.state;
    return (
      <>
        <form autoComplete="off" onSubmit={this.SubmitHandler}>
          <div>
            <label for="username">Username</label>
            <input
              placeholder="Username"
              id="username"
              name="username"
              value={username}
              onChange={this.ChangeHandler}
              className="Inputs"
            />
          </div>
          <div>
            <label for="sname">Second name</label>
            <input
              placeholder="Secon name"
              id="sname"
              name="sname"
              value={sname}
              onChange={this.ChangeHandler}
              className="Inputs"
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              placeholder="email@goma.cd"
              id="email"
              name="email"
              value={email}
              onChange={this.ChangeHandler}
              className="Inputs"
            />
          </div>
          <div>
            <button type="submit" className="Button">
              Record
            </button>
          </div>
        </form>
      </>
    );
  }
}
