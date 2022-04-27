import React from "react";
import authStore from "../../../stores/authStore";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" navbar navbar-layout">
      <div className="navbar-left">
        <p>ADD LOGO</p>
        <button
          onClick={() => {
            authStore.signout(navigate);
          }}
        >
          Sign out
        </button>
      </div>
      <div className="navbar-main">
        <p>Dashboard</p>
        <p>Project</p>
        <p>Teams</p>
        <p>Reports</p>
        <p>Settings</p>
      </div>
      <div className="navbar-right">
        <p>ADD(alert/notification + Prfile icon)</p>
      </div>
    </div>
  );
};

export default Navbar;
