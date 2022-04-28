import React from "react";
import SemesterAdd from "../MiniComponents/SemesterAddModal/SemesterAdd";
import SemesterCarousel from "./Carousel/SemesterCarousel";

const DashboardRight = () => {
  return (
    <div className="Home-right">
      <SemesterCarousel />
      <SemesterAdd />
    </div>
  );
};

export default DashboardRight;
