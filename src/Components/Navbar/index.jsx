// import { render } from "@testing-library/react";
import React from "react";

export default function Navbar() {
  const clickMe = () => {
    alert("Good jod");
  };
  return (
    <>
      <h3>Navbar</h3>
      <button onClick={clickMe}>Click me</button>
    </>
  );
}
