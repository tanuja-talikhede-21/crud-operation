import { useState } from "react";

function AddUser({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    addUser({
      id: Date.now(),
      name,
      email,
    });

    setName("");
    setEmail("");
  };

  return (
   <form className="form" onSubmit={handleSubmit}>
  <h2>Add User</h2>

  <input
    className="input"
    type="text"
    placeholder="Enter Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    className="input"
    type="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <button className="btn add-btn" type="submit">
    Add User
  </button>
</form>
  );
}

export default AddUser;
