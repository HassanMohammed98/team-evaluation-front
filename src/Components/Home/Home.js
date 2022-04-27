import React from "react";
import { Navigate, useParams } from "react-router-dom";
import DashboardRight from "../DashboardRight/DashboardRight";
import Navbar from "../MiniComponents/Navbar/Navbar";
import SemesterDetail from "./SemesterDetail";

const Home = () => {
  const { slug } = useParams();
  const token = localStorage.getItem("myToken");
  if (!token) {
    return <Navigate to="/signin" />;
  } else {
    return (
      <div className="Home">
        <Navbar />
        <div className="Home-layout">
          <div className="Home-left">
            <SemesterDetail slug={slug} />
          </div>
          <DashboardRight />
        </div>
      </div>
    );
  }
};

export default Home;
