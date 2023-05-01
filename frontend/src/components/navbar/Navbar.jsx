import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <div id="nav">
      <div id="title">Invoice 📜</div>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="pageLink">Home</div>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/enteries">
        Enteries
        <div className="pageLink"></div>
      </Link>
    </div>
  );
};

export default Navbar;
