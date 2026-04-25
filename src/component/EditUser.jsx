import { useState } from "react";

function EditUser({ editingUser, updateUser }) {
  const [name, setName] = useState(editingUser.name);
  const [email, setEmail] = useState(editingUser.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser({
      id: editingUser.id,
      name,
      email,
    });
  };

  return (
   <form className="form" onSubmit={handleSubmit}>
  <h2>Edit User</h2>

  <input
    className="input"
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    className="input"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <button className="btn update-btn" type="submit">
    Update User
  </button>
</form>
  );
}

export default EditUser;
