import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Navbar = () => {
  return (
    <div className="container">
      <div className="ui secondary pointing menu ">
        <div>
          <Link to="/" className="active item">
            Streamer
          </Link>
        </div>
        <a className="item">Streams</a>
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
