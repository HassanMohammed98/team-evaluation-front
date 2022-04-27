import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const SemesterDisplay = ({ semester }) => {
  let course;
  if (semester.semester.toLowerCase() === "summer") {
    course =
      "https://localbh.com/wp-content/uploads/2021/06/5356755_062119-cc-ss-summer-sun-img.jpg";
  } else if (semester.semester.toLowerCase() === "spring") {
    course =
      "https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg";
  } else if (semester.semester.toLowerCase() === "fall") {
    course =
      "https://govbooktalk.files.wordpress.com/2019/09/fall.jpg?w=600&h=402";
  }
  return (
    <Link to={`/${semester.id}`}>
      <img className="carousel-img" src={course} alt="First slide" />
      <Carousel.Caption className="carousel-caption">
        <h2>{semester.semester}</h2>
        <p>{semester.year}</p>
      </Carousel.Caption>
    </Link>
  );
};

export default SemesterDisplay;
