import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  const handelSubmit = (event) => {
    event.preventDefault();
    alert(`This is what you do ${name} ${username}`);
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
      <label>Prenom</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        name="username"
      />
      <input type="submit" />
    </form>
  );
}
