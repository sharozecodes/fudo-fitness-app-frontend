import React from "react";

function Preferences({ loggedIn }) {
  return loggedIn ? <div> Preferences</div> : <div>No Preferences</div>;
}

export default Preferences;
