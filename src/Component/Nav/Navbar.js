import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left-side">
        <h1>Pockie</h1>
      </div>
      <div className="middle">
        <>
          <input type="text" />
          <button>Search</button>
        </>
      </div>
      <div className="right-side">shoping icon</div>
    </div>
  );
};

export default Navbar;
