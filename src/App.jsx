import React, { Component } from "react";
// import Car from "../components/Car";
// import Navbar from "./Components/Navbar";
// import Data from "./Data";
import MainContainer from "./Components/Container/Main";
import AppBar from "./Components/AppBar";
// import { render } from "@testing-library/react";
import Form from "./Components/Form/Multiple";
import "./assets/css/style.css";
import axios from "axios";

const api = axios.create({
  baseURL: `http://127.0.0.1:7000/`,
});
class App extends Component {
  state = {
    users: [],
  };

  constructor() {
    super();
    api.get("/").then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    const Container = {
      position: "relative",
      width: "80%",
      padding: "10px",
      margin: "auto",
      borderRadius: ".4rem",
      border: "1px solid #ccc",
    };

    return (
      <>
        <AppBar />
        <div className="main">
          <div className="SideBar">
            {/* <h2>Sidebar</h2> */}
            <Form />

            {this.state.users.map((user) => (
              <li key={user.id_student}>{user.email}</li>
            ))}

            {/* <form>
              <input autoComplete="off" type="text" onKeyUp={keyClick} />
            </form> */}
          </div>
          <div className="MainContainer">
            <MainContainer />
          </div>
        </div>
      </>
    );
  }
}
export default App;
