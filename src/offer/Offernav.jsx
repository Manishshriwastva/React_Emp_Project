import React from "react";
import { Link } from "react-router-dom";

const Offernav = () => {
  return (
    <>
      <nav
        className="navbar bg-body-tertiary fixed-top shadow-lg"
        style={{ padding: "0", margin: "0" }}
      >
        
        <Link
          to="/offer"
          element={<Offernav />}
          className="navbar-brand"
          href="#"
          style={{ width: "100%", margin: "0", padding: "0" }}
        >
          {" "}
          <marquee behavior="" direction="left">
            Top courses from ₹549 when you first visit MyjavaOpt in to get the
            deal today <span style={{ color: "blue" }}>Click here</span>
          </marquee>
        </Link>
      </nav>
    </>
  );
};

export default Offernav;
