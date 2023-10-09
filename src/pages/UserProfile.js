import React from "react";

function UserProfile({ user }) {
  return user ? <h2>HELLLOOOOOO {user.name}</h2> : <></>;
}

export default UserProfile;
