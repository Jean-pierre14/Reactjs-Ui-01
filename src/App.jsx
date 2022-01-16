import React from "react";
// import Car from "../components/Car";
import Navbar from "./Components/Navbar";
import Data from "./Data";
import AppBar from "./Components/AppBar";
// import { render } from "@testing-library/react";
import Form from "./Components/Form/Multiple";

class App extends Component {
  render() {
    const keyClick = () => {
      alert("clicked");
    };
    return (
      <>
        <AppBar />
        <h3>Hello</h3>
        <Form />
        <form>
          <input type="text" onKeyUp={keyClick} />
        </form>
        <div id="result"></div>
        <Data />
        <Navbar />
      </>
    );
  }
}
export default App;
