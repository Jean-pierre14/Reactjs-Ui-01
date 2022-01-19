import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `http://127.0.0.1:7000/`,
});

class MainContainer extends Component {
  // Pour maintenant afficher vos informations dans la partie visuel
  /** il va faloir creer un state pour initialiser le contenu */
  state = {
    users: [],
  };

  // Tu dois placer ton constructor ici pas dans le render()
  constructor() {
    super();
    api.get("/").then((res) => {
      // console.log(res.data); /** To test our API data */
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <>
        <h3>Hello</h3>
        {this.state.users.map((user) => (
          <div key={user.id_student}>
            <h3>{user.username}</h3>
          </div>
        ))}
      </>
    );
  }
}

export default MainContainer;
