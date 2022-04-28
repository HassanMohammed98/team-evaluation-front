import React from "react";
import Carousel from "react-bootstrap/Carousel";
import semesterStore from "../../../stores/semesterStore";
import SemesterDisplay from "./SemesterDisplay";
import { observer } from "mobx-react";

const SemesterCarousel = () => {
  const semesters = [...semesterStore.semesters]
    .map((semester) => (
      <Carousel.Item key={semester.id} className="w-100 carousel-item">
        <SemesterDisplay semester={semester} />
      </Carousel.Item>
    ))
    .reverse();
  console.log("semester_orginal_After...", semesterStore.semesters);
  return (
    <Carousel fade className="carousel">
      {semesters}
    </Carousel>
  );
};

export default observer(SemesterCarousel);
