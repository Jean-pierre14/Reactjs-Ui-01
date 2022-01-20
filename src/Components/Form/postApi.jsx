import React, { Component } from "react";

export default class PostApi extends Component {
  state = {
    username: '', sname: '', email: ''
  };

  constructor() {
    super();
    this.setState({inputs: })
  }
  ChangeHandler(e){
      this.setState({[e.target.name]: e.target.value})
  }
  render() {
      const {username, sname, email} = this.state
    return (
      <>
        <form autoComplete="off">
          <div>
            <label for="username">Username</label>
            <input
              placeholder="Username"
              id="username"
              name="username"
              value={username}
              onChange={ChangeHandler}
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
              onChange={ChangeHandler}
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
              onChange={ChangeHandler}
              className="Inputs"
            />
          </div>
          <div>
              <button type="submit">Record</button>
          </div>
        </form>
      </>
    );
  }
}
