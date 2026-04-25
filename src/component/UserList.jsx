function UserList({ users, deleteUser, editUser }) {
  return (
    <div className="user-list">
      <h2 className="user-title">User List</h2>

      {users.length === 0 && (
        <p className="empty">No users found</p>
      )}

      <ul className="list">
        {users.map((user) => (
          <li key={user.id} className="list-item">
            <span className="user-text">
              {user.name} - {user.email}
            </span>

            <div className="btn-group">
              <button
                className="btn edit-btn"
                onClick={() => editUser(user)}
              >
                Edit
              </button>

              <button
                className="btn delete-btn"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;