import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ setShowcase }) => {
  return (
    <div className="navbar__btn__box">
      <button className="navbar__btn__home" onClick={() => setShowcase(true)}>
        Home
      </button>
      <button className="navbar__btn__List" onClick={() => setShowcase(false)}>
        list
      </button>
    </div>
  );
};

export default Navbar;
