import React from "react";
// import Car from "../components/Car";
import Navbar from "./Components/Navbar";
import Data from "./Data";
import AppBar from "./Components/AppBar";
// import { render } from "@testing-library/react";

export default function App() {
  return (
    <>
      <AppBar />
      <h3>Hello</h3>
      <Data />
      <Navbar />
    </>
  );
}
