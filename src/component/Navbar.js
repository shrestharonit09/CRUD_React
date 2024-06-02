import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;

  return (
    <div
      className={`flex justify-left gap-5 border shadow-lg bg-blue-500 font-semibold text-white p-5 ${
        location == "/practice" ? "hidden" : "visible"
      } ${location == "/fb" ? "hidden" : "visible"} ${
        location == "/youtube" ? "hidden" : "visible"
      }  ${location == "/sidebar" ? "hidden" : "visible"}`}
    >
      <Link to="/crud">Crudoperation </Link>
      <Link to="/fb">Facebook Home Page</Link>
      <Link to="/youtube"> Youtube</Link>
    </div>
  );
};

export default Navbar;
