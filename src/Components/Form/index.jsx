import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const handelSubmit = (event) => {
    event.preventDefault();
    alert(`This is what you do ${name}`);
  };
  return (
    <form onSubmit={handelSubmit}>
      <label>Nom</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
      />
      <input type="submit" />
    </form>
  );
}
