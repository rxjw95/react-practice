import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>{user.email}</span>
    </div>
  );
}

export default User;
