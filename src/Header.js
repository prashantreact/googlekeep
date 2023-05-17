import React from "react";
import logo from "./Images/note.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" height="50" />
        <h1 className="h1_tag">Keep App</h1>
      </div>
    </>
  );
};

export default Header;
