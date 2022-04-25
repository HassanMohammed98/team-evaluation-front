import React, { useState } from "react";
import AuthForm from "../MiniComponents/AuthForm";
import { NavLink } from "react-router-dom";
import authStore from "../../stores/authStore";
import { useParams, useNavigate } from "react-router-dom";

const SignUP = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });
  //   const AuthSuccess = () => {
  //     return <Navigate to="/" />;
  //   };
  const handleChange = (event) => {
    setAuth({
      ...auth,
      [event.target.name]: event.target.value,
    });
    console.log("changed...", event.target.name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(auth);
    authStore.signup(auth, navigate);
    setAuth({
      username: "",
      password: "",
    });
  };
  return (
    <div className="signup">
      <div className="Auth-left">
        <img
          src="flame-remote-working.gif"
          alt="Computer man"
          className="Auth-gif"
        ></img>
      </div>
      <div className="Auth-right">
        <div className="Auth-data-box">
          <p className="Auth-heading">Sign up</p>
          <AuthForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            auth={auth}
            buttonName={"Sign up"}
          />
          <p className="mt-2 form-checkbox">
            Already have an Account?{" "}
            <NavLink to="/signin" className="Auth-link">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
