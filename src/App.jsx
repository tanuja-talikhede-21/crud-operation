import React, { useState } from "react";
import EditUser from "./component/EditUser";
import AddUser from "./component/AddUser";
import UserList from "./component/UserList";
import './index.css'
function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setEditingUser(null);
  };

  return (
    <div className="container">
      <h1 className="title">CRUD App</h1>

      <div className="card">
        {editingUser ? (
          <EditUser
            editingUser={editingUser}
            updateUser={updateUser}
          />
        ) : (
          <AddUser addUser={addUser} />
        )}
      </div>

      <div className="card">
        <UserList
          users={users}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      </div>
    </div>
  );
}

export default App;
