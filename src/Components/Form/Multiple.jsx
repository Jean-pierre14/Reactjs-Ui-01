import { useState } from "react";
export default function Multiple() {
  const [inputs, setInputs] = useState({});

  const EventChange = (event) => {
    const name = event.target.name,
      value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const Myform = (event) => {
    event.preventDefault();

    alert(inputs);
  };

  const FormStyle = {
    position: "relative",
    width: "90%",
    margin: "10px auto",
    padding: "10px",
    border: "1px solid #ccc",
    "border-radius": ".4rem",
  };
  const Inputs = {
    position: "relative",
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    "border-radius": ".4rem",
    outline: "none",
  };
  const MarginY = {
    position: "relative",
    margin: "10px 0",
  };
  const BtnSubmit = {
    width: "100%",
    borderRadius: ".4rem",
    padding: "15px 20px",
  };
  return (
    <>
      <div style={FormStyle}>
        <form onSubmit={Myform}>
          <div id="error">
            <h3>Form</h3>
          </div>
          <div>
            <label for="name">Name</label>
            <input
              autoComplete="off"
              style={Inputs}
              className="input"
              name="name"
              placeholder="Name..."
              value={inputs.name}
              onChange={EventChange}
            />
          </div>
          <div>
            <label for="name">Second Name</label>
            <input
              autoComplete="off"
              style={Inputs}
              className="input"
              name="sname"
              placeholder="Second Name..."
              value={inputs.sname}
              onChange={EventChange}
            />
          </div>
          <div>
            <label for="name">Second Name</label>
            <input
              autoComplete="off"
              style={Inputs}
              className="input"
              name="email"
              placeholder="Email"
              value={inputs.email}
              onChange={EventChange}
            />
          </div>
          <div style={MarginY}>
            <input className="Button" type="submit" style={BtnSubmit} />
          </div>
        </form>
      </div>
    </>
  );
}
