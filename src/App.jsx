import React, { Component } from "react";
// import Car from "../components/Car";
import Navbar from "./Components/Navbar";
import Data from "./Data";
import AppBar from "./Components/AppBar";
// import { render } from "@testing-library/react";
import Form from "./Components/Form/Multiple";
import "./assets/css/style.css";

class App extends Component {
  render() {
    // const keyClick = () => {
    //   alert("clicked");
    // };

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
            {/* <form>
              <input autoComplete="off" type="text" onKeyUp={keyClick} />
            </form> */}
          </div>
          <div className="MainContainer">
            <h3>Data</h3>
          </div>
        </div>
      </>
    );
  }
}
export default App;
