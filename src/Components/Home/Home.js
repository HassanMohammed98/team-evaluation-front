import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import authStore from "../../stores/authStore";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("myToken");
  if (!token) {
    return <Navigate to="/signin" />;
  } else {
    return (
      <div>
        <button
          className="mt-4 form-button"
          onClick={() => {
            authStore.signout(navigate);
          }}
        >
          Sign out
        </button>
      </div>
    );
  }
};

export default Home;
