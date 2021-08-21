import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./logo.png";
import logo2 from "./clapper.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      {/* <img className="navAvatar" src={logo} alt="Logo" /> */}
      <span className="brand">Trailer Show</span>
      {/* <img
        className="navLogo"
        src="https://dwglogo.com/wp-content/uploads/2019/02/Netflix_N_logo.png"
        alt="Logo"
      /> */}
      {/* <img className="navLogo" href={logo2}></img> */}
    </div>
  );
}

export default Nav;
