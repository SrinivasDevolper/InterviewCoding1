import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px",
        background: "lightblue",
        padding: "10px",
      }}
    >
      <h1>Navbar</h1>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          listStyle: "none",
        }}
      >
        <li>
          <NavLink
            style={{ fontSize: "18px", color: "black", textDecoration: "none" }}
            to="/"
          >
            FirstPage
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ fontSize: "18px", color: "black", textDecoration: "none" }}
            to="/secondpage"
          >
            secondPage
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
